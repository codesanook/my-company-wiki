# my-company-wiki
A simple Gatsby wiki with GitHub Actions, Azure App Service container and Google authentication (log in with Gmail)

# How to run the project locally
- CD to the root of the project
- Install all required NPM packages
  ```sh
  $ yarn
  ```
- Start Gatsby in development mode

# PRO
- Theme shadow

# CON
- You need to crate page manually, not automatically discover


# Debugging

# Get pro
# https://console.developers.google.com/project

# specific container name
```sh
$ docker build --tag wiki-image --no-cache .
$ docker run --rm --env-file .env --publish 8000:8000 --name wiki wiki-image
$ docker stop wiki
$ docker exec -it wiki /bin/sh
```

http://2b36-146-88-46-11.ap.ngrok.io/oauth2/callback


# Trouble shooting
- clear cookie
- ctrl+f5
