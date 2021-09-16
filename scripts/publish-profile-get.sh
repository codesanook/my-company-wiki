#! /bin/bash

az webapp deployment list-publishing-profiles \
  --name my-company-wiki \
  --resource-group codesanook-example-resource-group \
  --xml
