#! /bin/bash

az webapp deployment list-publishing-profiles \
  --name my-company-wiki \
  --resource-group aaron-resource-group \
  --xml
