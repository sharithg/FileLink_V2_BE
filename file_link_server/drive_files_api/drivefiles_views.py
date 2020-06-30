from .models import DriveLinks
from django.http import HttpResponse, HttpRequest, JsonResponse, HttpResponseRedirect
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
import google.oauth2.credentials
from .drivefiles_class import GoogleAPI
from rest_framework import permissions, viewsets
from .serializers import DriveLinksSerializer


def do_google_add(user_creds, file_type, file_name):
    creds = get_creds(user_creds)
    credentials = google.oauth2.credentials.Credentials(**creds)
    drive = googleapiclient.discovery.build(
        API_SERVICE_NAME, API_VERSION, credentials=credentials
    )
    print(credentials)
    set_creds(user_creds, credentials)
    return drive.files().list().execute()


class DriveLinksViewset(viewsets.ModelViewSet):
    permissions = [permissions.IsAuthenticated]
    serializer_class = DriveLinksSerializer

    def get_queryset(self):
        if not self.request.user.is_authenticated:
            raise PermissionDenied()
        return self.request.user.drive_files_user.all()

    def create(self, request, *args, **kwargs):
        ucreds = request.user.google_api
        google_drive = GoogleAPI(ucreds)
        if request.data["file_type"] == "docs":
            comp = google_drive.create_doc(request.data["file_name"])
        elif request.data["file_type"] == "sheets":
            comp = google_drive.create_sheet(request.data["file_name"])
        else:
            comp = google_drive.create_slides(request.data["file_name"])

        g_data = {
            "file_id": comp["id"],
            "file_type": comp["mimeType"],
            "file_name": comp["name"],
            "file_view_link": comp["webViewLink"],
            "file_icon_link": comp["iconLink"],
            "college_class": request.data["college_class"]
        }
        serializer = self.get_serializer(data=g_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )

    def perform_create(self, serializer):
        if not self.request.user.is_authenticated:
            raise PermissionDenied()
        # print("BOD: ", self.request.body)
        serializer.save(owner=self.request.user)


@api_view()
def test_api(request):
    ucreds = request.user.google_api
    doc = GoogleAPI(ucreds)
    comp = doc.create_doc("Testtt")
    return JsonResponse(comp)


# @api_view(["POST"])
# @permission_classes([IsAuthenticated])
# def add_file(request):
#     print(request.user.drive_files_user)
#     # credentials = google.oauth2.credentials.Credentials(
#     #     **request.session["credentials"]
#     # )
#     # # with open("check.txt", "w") as f:
#     # #     f.write(json.dumps(request.session["credentials"]))

#     # drive = googleapiclient.discovery.build(
#     #     API_SERVICE_NAME, API_VERSION, credentials=credentials
#     # )
#     return JsonResponse({"done": True})
