#! /bin/bash

# base64-w 0 to disable line wrapping in its output
SECRET_VALUE=$(cat authenticated-emails.txt | base64 -w 0)
echo $SECRET_VALUE
gh secret set AUTHENTICATED_EMAILS -b"${SECRET_VALUE}" --repo codesanook/my-company-wiki

AZURE_WEBAPP_NAME="my-company-wiki"
gh secret set AZURE_WEBAPP_NAME -b"${AZURE_WEBAPP_NAME}" --repo codesanook/my-company-wiki

# AZURE_WEBAPP_CONTAINER_PUBLISH_PROFILE=$(cat )
# gh secret set AZURE_WEBAPP_NAME -b"${AZURE_WEBAPP_NAME}" --repo codesanook/my-company-wiki
