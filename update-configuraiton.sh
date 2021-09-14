#! /bin/bash

az webapp config appsettings set \
  --resource-group aaron-resource-group \
  --name my-company-wiki \
  --settings @app-service-configuration.json

# WEBSITES_ENABLE_APP_SERVICE_STORAGE false
