#! /bin/bash

az webapp config appsettings set \
  --resource-group codesanook-example-resource-group \
  --name my-company-wiki \
  --settings @app-service-configuration.json
