# -*- coding: utf-8 -*-
from django.http import HttpResponse, HttpRequest, JsonResponse, HttpResponseRedirect
import os
from django.template import loader
import flask
import requests
from django.shortcuts import render, redirect
import json
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
import google.oauth2.credentials
import google_auth_oauthlib.flow
import googleapiclient.discovery
from file_link_server import settings
from rest_framework.decorators import api_view
from django.core import serializers
from .models import CredentialsModel
import json
from django.forms import model_to_dict
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models import Model
from django.contrib.sessions.backends.db import SessionStore


class ExtendedEncoder(DjangoJSONEncoder):
    def default(self, o):

        if isinstance(o, Model):
            return model_to_dict(o)

        return super().default(o)


# This variable specifies the name of a file that contains the OAuth 2.0
# information for this application, including its client_id and client_secret.
CLIENT_SECRETS_FILE = settings.GOOGLE_OAUTH2_CLIENT_SECRETS_JSON

# This OAuth 2.0 access scope allows for full read/write access to the
# authenticated user's account and requires requests to use an SSL connection.
SCOPES = ["https://www.googleapis.com/auth/drive.file"]
API_SERVICE_NAME = "drive"
API_VERSION = "v3"


@api_view()
def is_google_auth(request):
    created, new = CredentialsModel.objects.get_or_create(
        owner_id=request.user.id)
    if new:
        return JsonResponse(created.isauthenticated, safe=False)
    else:
        return JsonResponse(created.isauthenticated, safe=False)

session = SessionStore()
@api_view()
def in_auth_flow(request):
    if "inflow" in session:
        if session["inflow"]:
            return JsonResponse({"inflow": "True"})
    return JsonResponse({"inflow": "False"})


@api_view()
def index(request):
    return render(request, "drive_files/prompt.html")



@api_view()
def authorize(request):
    session["inflow"] = True
    session["user"] = request.user.id
    creds = CredentialsModel.objects.get(
        owner_id=session["user"]
    )
    for key, value in session.items():
        print('{} => {}'.format(key, value))
    session["credentials"] = credentials_to_dict(creds)
    # Create flow instance to manage the OAuth 2.0 Authorization Grant Flow steps.
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
        CLIENT_SECRETS_FILE, scopes=SCOPES
    )

    # The URI created here must exactly match one of the authorized redirect URIs
    # for the OAuth 2.0 client, which you configured in the API Console. If this
    # value doesn't match an authorized URI, you will get a 'redirect_uri_mismatch'
    # error.
    flow.redirect_uri = "http://localhost:8000/oauth2callback"

    authorization_url, state = flow.authorization_url(
        # Enable offline access so that you can refresh an access token without
        # re-prompting the user for permission. Recommended for web server apps.
        access_type="offline",
        # Enable incremental authorization. Recommended as a best practice.
        include_granted_scopes="true",
        prompt="consent",
    )
    session["state"] = state
    print("AUTH URI: ", authorization_url)

    return JsonResponse({"redirect": authorization_url, "type": "auth_url"})
    # return redirect(authorization_url)


@api_view()
def oauth2callback(request):
    for key, value in session.items():
        print('{} => {}'.format(key, value))
    creds = CredentialsModel.objects.get(owner_id=session["user"])
    # print("User: ", request.session["user"])
    # Specify the state when creating the flow in the callback so that it can
    # verified in the authorization server response.
    state = session["state"]
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
        CLIENT_SECRETS_FILE, scopes=SCOPES, state=state
    )
    flow.redirect_uri = "http://localhost:8000/oauth2callback"

    # Use the authorization server's response to fetch the OAuth 2.0 tokens.
    try:
        authorization_response = HttpRequest.get_raw_uri(request)
        flow.fetch_token(authorization_response=authorization_response)
        credentials = flow.credentials
    except:
        if "credentials" in session:
            del session["credentials"]

        if "state" in session:
            del session["state"]

        if "user" in session:
            del session["user"]
        del session["inflow"]
        return JsonResponse({"status": "Not accepted"})

    creds.isauthenticated = True
    session["credentials"] = credentials_to_dict(credentials)
    creds.refresh_token = session["credentials"]["refresh_token"]
    creds.token_uri = session["credentials"]["token_uri"]
    creds.client_id = session["credentials"]["client_id"]
    creds.client_secret = session["credentials"]["client_secret"]
    creds.scopes = session["credentials"]["scopes"]
    creds.token = session["credentials"]["token"]
    creds.save()

    if "credentials" in session:
        del session["credentials"]

    if "state" in session:
        del session["state"]

    if "user" in session:
        del session["user"]
    # Store credentials in the session.
    # ACTION ITEM: In a production app, you likely want to save these
    #              credentials in a persistent database instead.
    print("ACCEPTED")
    del session["inflow"]
    return JsonResponse({"status": "accepted"})


@api_view()
def revoke(request):
    context = {}
    if "credentials" not in request.session:
        context[
            "revoke_response"
        ] = "You need to authorize before testing the code to revoke credentials."
        return render(request, "drive_files/prompt.html", context)

    print("Helllllllo")
    credentials = google.oauth2.credentials.Credentials(
        **request.session["credentials"]
    )

    revoke = requests.post(
        "https://oauth2.googleapis.com/revoke",
        params={"token": credentials.token},
        headers={"content-type": "application/x-www-form-urlencoded"},
    )
    print(revoke)

    status_code = getattr(revoke, "status_code")
    context["revoke_response"] = "An error occurred."
    if status_code == 200:
        context["revoke_response"] = "Credentials successfully revoked."
        return render(request, "drive_files/prompt.html", context)
    else:
        return render(request, "drive_files/prompt.html", context)


def credentials_to_dict(credentials):
    return {
        "token": credentials.token,
        "refresh_token": credentials.refresh_token,
        "token_uri": credentials.token_uri,
        "client_id": credentials.client_id,
        "client_secret": credentials.client_secret,
        "scopes": credentials.scopes,
    }


@api_view()
def clear_credentials(request):
    context = {"creds_cleard": "Credentials have been cleard"}
    if "credentials" in request.session:
        del request.session["credentials"]
    return render(request, "drive_files/prompt.html", context)


os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"
os.environ["OAUTHLIB_RELAX_TOKEN_SCOPE"] = "1"
