#! /bin/bash

az webapp config appsettings set \
  --resource-group aaron-resource-group \
  --name my-company-wiki \
  --settings @app-service-configuration.json
