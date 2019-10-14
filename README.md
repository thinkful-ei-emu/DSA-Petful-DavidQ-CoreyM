## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
# Petful Server
>_live At_ https://blooming-badlands-93561.herokuapp.com/

by [David Q](https://www.github.com/dcoollx) and [Corey Moore](https://www.github.com/monorthwest)

This App is A FIFO adoption App, that matched dogs and/or cat to new owners

TECH STACK:
- NODEJS
- EXPRESS
- CORS
- REACTJS

___

# Routes
## Dog
>/api/dog returns next dog to be adpoted
# Cat
>/api/cat returns next cat
## Users
> GET - /api/users/position?user="NAME" return current position for that user

> POST - /api/users add user to queue
> POST - /api/Adopt marks pet as adopted reqs user and either 'dog' 'cat'
