#! /bin/bash

az webapp create --name my-company-wiki \
  --resource-group codesanook-example-resource-group \
  --plan codesanook-example-app-service-plan \
  --deployment-container-image-name mcr.microsoft.com/dotnet/samples:aspnetapp \
  --debug
