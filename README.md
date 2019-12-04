# Fullstack MERN login and authentication application. (backend)
This repository is part of the project that consists in the development of a minimum FULLSTACK system for user authentication with nodejs. Here you will find all the code of the backend.

![Imgur](https://i.imgur.com/ymK1gE7.png)
### That makes?
It is the server-side programming that allows the user to register in the database and log in by authenticating through jsonwebtoken and passport.js.

## Most important dependencies.
- Express
- Morgan
- Passport
- Bcrypt
- Mongoose
- Cors (very important)
- jsonwebtoken
- validator
## Requirements
- nodejs v12
- mongodb database (external or remote)
## Use
-  After downloading the repository, execute the command
```
npm install
```
		 
- After having the dependencies installed change the name of the .env.example file to .env and configure your variables
of environment.
In the end the .env file should look something like this:
![Imgur](https://i.imgur.com/zG062LM.png)
**Note:** 
The variable **MONGO_URI** is the uri address of your database
by default if it is local it is like this:
then execute the command
```
npm start
```

Great! Now you have access to an authentication and user logging process. At least to the backend.

## Testing
You can test the operation of this backend with the use of APIS construction programs like Postman:
![Imgur](https://i.imgur.com/TZJjetP.png)[Frontend HEREEE! 😍](https://github.com/ManuelGarciaDvnt/awesome-login-frontend)

## License
**MIT**

