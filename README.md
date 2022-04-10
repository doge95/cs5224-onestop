# cs5224-onestop 
## Step up Amlify Project
Install AWS Amplify CLI
```
$ npm install -g @aws-amplify/cli
```
Login to AWS
```
$ amplify configure
```
Initialize a new AWS Amplify Project
```
$ amplify init
```
## Add Authentication
Import existing Amazon Cognito resource (created by CloudFormation) into the Amplify project. 
```
$ amplify import auth
```
Choose the one that created previously by CloudFormation.
## Add API
Amplify API category provides a solution for making HTTP requests to REST and GraphQL endpoints.  
Integrate with existing GraphQL API endpoint (created by CloudFormation) into the Amplify project.
1. Go to AWS AppSync console. 
2. Select the instance created previously by CloudFormation.
3. Under `Integrate with your app` section, copy and run the `codegen` command.
```
amplify add codegen --apiId bo7ggkp7fvf67cu4bl6bl3etti
```
## Push Local Changes to Amplify
Push local changes to the cloud. 
```
$ amplify push
```
## Set up Frontend
1. Go to AWS Ampliy console
2. Select this project
3. Follow the instructions to complete the setup to connect to the source code [Gitlab repository](https://github.com/doge95/cs5224-onestop).
4. Add environment variables to the build settings.  

`Configure build settings` -> `Advanced settings` -> `Environment variables`  
- AMPLIFY_IDENTITYPOOL_ID
- AMPLIFY_NATIVECLIENT_ID
- AMPLIFY_USERPOOL_ID
- AMPLIFY_WEBCLIENT_ID  

The corresponding values can be found in `amplify` -> `team-provider-info.json`

4. Save and deploy