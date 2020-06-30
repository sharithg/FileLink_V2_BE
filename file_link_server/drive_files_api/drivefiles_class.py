import googleapiclient.discovery
import google.oauth2.credentials
import ast

DRIVE_SERVICE_NAME = "drive"
DRIVE_VERSION = "v3"


def set_creds(creds, creds_to_set):
    print("My creds: ", creds)
    print("Goog creds: ", creds_to_set)
    creds.token = creds_to_set.token
    creds.refresh_token = creds_to_set.refresh_token
    creds.token_uri = creds_to_set.token_uri
    creds.client_id = creds_to_set.client_id
    creds.client_secret = creds_to_set.client_secret
    creds.scopes = creds_to_set.scopes
    creds.save()


def get_creds(creds):
    creds_dic = {
        "token": creds.token,
        "refresh_token": creds.refresh_token,
        "token_uri": creds.token_uri,
        "client_id": creds.client_id,
        "client_secret": creds.client_secret,
        "scopes": ast.literal_eval(creds.scopes),
    }
    return creds_dic


class GoogleAPI:
    def __init__(self, credentials):
        self.credentials = get_creds(credentials)
        self.curr_creds = credentials

    def create_doc(self, title):
        body = {"name": title, "mimeType": "application/vnd.google-apps.presentation"}
        gcredentials = google.oauth2.credentials.Credentials(
            **self.credentials)
        set_creds(self.curr_creds, gcredentials)
        doc = googleapiclient.discovery.build(
            DRIVE_SERVICE_NAME, DRIVE_VERSION, credentials=gcredentials
        )
        created = doc.files().create(
            body=body, fields="id, name, mimeType, webViewLink, iconLink").execute()
        return created
    
    def create_sheet(self, title):
        body = {"name": title, "mimeType": "application/vnd.google-apps.spreadsheet"}
        gcredentials = google.oauth2.credentials.Credentials(
            **self.credentials)
        set_creds(self.curr_creds, gcredentials)
        doc = googleapiclient.discovery.build(
            DRIVE_SERVICE_NAME, DRIVE_VERSION, credentials=gcredentials
        )
        created = doc.files().create(
            body=body, fields="id, name, mimeType, webViewLink, iconLink").execute()
        return created
    
        
    def create_slides(self, title):
        body = {"name": title, "mimeType": "application/vnd.google-apps.document"}
        gcredentials = google.oauth2.credentials.Credentials(
            **self.credentials)
        set_creds(self.curr_creds, gcredentials)
        doc = googleapiclient.discovery.build(
            DRIVE_SERVICE_NAME, DRIVE_VERSION, credentials=gcredentials
        )
        created = doc.files().create(
            body=body, fields="id, name, mimeType, webViewLink, iconLink").execute()
        return created

# fields="id, name, mimeType, webViewLink, iconLink"
