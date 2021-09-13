FROM golang:1-alpine as oauth2-build
# Build an oauth2-proxy binary to /go/bin/oauth2-proxy
RUN go get github.com/oauth2-proxy/oauth2-proxy

# https://askubuntu.com/a/445496/978822


FROM node:12-buster as gatsby-build
WORKDIR /app

# https://stackoverflow.com/a/64927666/1872200
# https://github.com/imagemin/imagemin/issues/168#issuecomment-265545957
# RUN apk add --no-cache \
#     autoconf \
#     automake \
#     libtool \
#     libpng-dev \
#     g++ \
#     nasm

# Copy all source code to a working directory (/app)
COPY . ./
RUN yarn && yarn run build

##############################################################

# Use as base a deployment image
FROM node:12-alpine
EXPOSE 8000
WORKDIR /app
RUN yarn global add serve@11

# Copy all built oauth2-proxy binaries to a working directoy
COPY --from=oauth2-build /go/bin/oauth2-proxy ./
# Make oauth2-proxy executable
RUN chmod +x oauth2-proxy

# Prepare entrypoint file
COPY ./entrypoint.sh ./
RUN chmod +x entrypoint.sh

# Copy project code
COPY --from=gatsby-build /app/public ./public
COPY ./oauth-config.cfg ./
COPY ./authenticated-emails.txt ./

ENTRYPOINT ["./entrypoint.sh"]
