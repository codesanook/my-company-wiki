#!/bin/sh

# This values are from environment variable which can be .env file or Azure configuration
# $OAUTH2_CLIENT_ID
# $OAUTH2_CLIENT_SECRET
# $OAUTH2_REDIRECT_URL


# Run oauth2-proxy and serve
./oauth2-proxy \
  --client-id $OAUTH2_CLIENT_ID \
  --client-secret $OAUTH2_CLIENT_SECRET \
  --redirect-url $OAUTH2_REDIRECT_URL \
  --config "./oauth-config.cfg" \
  & serve --listen 3000 --no-clipboard public

# For running only serve
# serve --listen 8000 --no-clipboard public
