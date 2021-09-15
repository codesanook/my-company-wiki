#! /bin/bash

az webapp create \
  --name my-company-wiki \
  --resource-group aaron-resource-group \
  --plan cs-container-app-service-plan \
  --deployment-container-image-name mcr.microsoft.com/dotnet/samples:aspnetapp

