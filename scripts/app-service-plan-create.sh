#! /bin/bash

az appservice plan create \
  --name codesanook-example-app-service-plan \
  --resource-group codesanook-example-resource-group \
  --is-linux \
  --sku FREE

