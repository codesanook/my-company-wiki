#!/bin/sh

# Run oauth2-proxy and serve
# OAUTH2_CLIENT_ID
# OAUTH2_CLIENT_SECRET
# OAUTH2_REDIRECT_URL

serve --listen 8000 --no-clipboard public

# ./oauth2-proxy \
#   --client-id $OAUTH2_CLIENT_ID \
#   --client-secret $OAUTH2_CLIENT_SECRET \
#   --redirect-url $OAUTH2_REDIRECT_URL \
#   --config "./oauth-config.cfg" \
# & serve --listen 3000 --no-clipboard public
