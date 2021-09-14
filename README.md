# my-company-wiki
A simple Gatsby wiki with GitHub Actions, Azure App Service container and Google authentication (log in with Gmail)

# How to run the project locally
- CD to the root of the project
- Install all required NPM packages
  ```sh
  $ yarn
  ```
- Start Gatsby in development mode
  ```sh
  $ yarn start
  ```

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

# Deploy to Azure App Service Container

## Create Azure Container Registry (ACR)
- Create a new Azure Container Registry with basic plan.
- Get these values from  Access keys menu in Azure Container Registry's panel that you have just created.
  - Log in server (Usually in `YOUR_CONTAINER_REGISTER_NAME.azurecr.io` pattern)
  - Username
  - Password
- To get a username and a password, you may need to enable "Admin user" option.
- We are going to use these values as GitHub Actions secrets

## Create a new App Service
- Create a new Azure App Service with a container.
- Use DockerHub registry and select `mcr.microsoft.com/dotnet/samples:aspnetapp` image
- Check deployment logging.
- Open a browser and navigate to https://[YOUR_APP_SERVICE_NAME].azurewebsites.net/
- You should find an example of ASP.NET Core MVC app.
- Example of Azure CLI to create a new Azure App Service Container:
  ```sh
  az webapp create \
    --name [YOUR_APP_SERVICE_NAME] \
    --resource-group [YOUR_RESOURCE_GROUP_NAME] \
    --plan [YOUR_APP_SERVICE_PLAN] \
    --deployment-container-image-name mcr.microsoft.com/dotnet/samples:aspnetapp
  ```

## Set some configurations
- Set these configurations to your app service:
  - `WEBSITE_WEBDEPLOY_USE_SCM`
    - true
  - `WEBSITES_PORT`
    - 8000
  - `OAUTH2_CLIENT_ID`
    - Set value to your Google Oauth2 client ID.
  - `OAUTH2_CLIENT_SECRET`
    - Set value to your Google Oauth2 client secret.
  - `OAUTH2_REDIRECT_URL`
    - Set value to your public website redirect URL.
      It is usually in: https://[YOUR_APP_SERVICE_NAME].azurewebsites.net/oauth2/callback
  - `DOCKER_REGISTRY_SERVER_URL`
    - YOUR_CONTAINER_REGISTER_NAME.azurecr.io
  - `DOCKER_REGISTRY_SERVER_USERNAME`
    - Your ACR username
  - `DOCKER_REGISTRY_SERVER_PASSWORD`
    - Your ACR password

### Create GitHub secret keys and values
- Create these GitHub secrets with their values:
  - `AZURE_WEBAPP_CONTAINER_PUBLISH_PROFILE`
    - Download publish profile from your App Service
      and use it as a value of AZURE_WEBAPP_CONTAINER_PUBLISH_PROFILE secret.
  - `AZURE_WEBAPP_NAME`
    - Your app service name, only name, no `https://` or `.azurewebsites.net`.
  - `LOGIN_SERVER`
    - YOUR_CONTAINER_REGISTER_NAME.azurecr.io
  - `REGISTRY_USERNAME`
    - ACR username
  - `REGISTRY_PASSWORD`
    - ACR password
  - `AUTHENTICATED_EMAILS`
    - authenticated emails in base64 format which containers each line per an email.
    - It can be created as `$ cat filename | base64`

## Trigger GitHub Actions
- Go to GitHub Action tab and enable it
- Create new commit and push the project to the main branch

# Add test user and set redirect URL
- https://console.cloud.google.com/cloud-resource-manager

## Debugging
- Configuration not load and no value in docker run
- Restart a website and make http request


## Presentation
- [Link to Google slide presentation](https://docs.google.com/presentation/d/1OkDfotFvxa4PNxIj2VksGwfjXWVOAOURDJ59fUcXzzo/edit)


## TODO
- [ ] Improve code quality
- [ ] Use async/await
