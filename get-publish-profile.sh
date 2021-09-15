#! /bin/bash

az webapp deployment list-publishing-profiles \
  --name my-company-wiki \
  --resource-group aaron-resource-group \
  --xml



$ az webapp deployment list-publishing-profiles \
  --name APP_SERVICE_NAME \
  --resource-group RESOURCE_GROUP_NAME \
  --xml
