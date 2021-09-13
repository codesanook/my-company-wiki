FROM golang:1-alpine as builder

# Build an oauth2-proxy binary to /go/bin/oauth2-proxy
RUN go get github.com/oauth2-proxy/oauth2-proxy

# Use as base a deployment image
FROM node:12-alpine
EXPOSE 8000
WORKDIR /app
RUN npm install -g serve@11

# Copy all built oauth2-proxy binaries to a working directoy
COPY --from=builder /go/bin/oauth2-proxy ./

# Make oauth2-proxy executable
RUN chmod +x oauth2-proxy

# Prepare entrypoint file
COPY ./entrypoint.sh ./
RUN chmod +x entrypoint.sh

# Copy project code
COPY ./oauth_config.cfg ./
COPY ./reports/html-report/ ./
COPY ./authenticated-emails-list.txt ./

ENTRYPOINT ["./entrypoint.sh"]
