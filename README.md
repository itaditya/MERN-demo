## To Start Local Server - 
 1. Install heroku-cli
 2. Install nodemon with `npm i -g nodemon`
 3. Run `npm i` to install the dependencies
 4. Run `touch .env` then open it and fill it like the sample .env file.
 5. Run `npm start` and make sure the mongo instance is also running.

## Sample .env file
```
NODE_ENV=development
port=5000
googleClientID=-------------.apps.googleusercontent.com
googleClientSecret=--------------
mongoURI=mongodb://localhost:27017/merndemodb
cookieKey=---------------
HOST_URL=http://localhost:5000
```

Note - 
1. Heroku Cli is used for handling **environment variables** and deploys.
2. To get **googleClientID** and **googleClientSecret** make a new project at [here](https://console.developers.google.com) and enable the Google+ api.
3. If you don't have **mongodb** locally, then create a remote db [here](https://mlab.com/home)
