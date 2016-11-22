# Project Scaffolding

##Includes:
1. Webpack/Babel
2. Postgres/Sequelize
3. Node/Express (including Body Parser)
4. React (including React Router and Rebass)
5. Redux (including Redux Forms)

##Create local Postgres database and set db_name in db/index.js.
```
psql
CREATE DATABASE db_name;
\q
```

##Build and serve your project locally. Listen at localhost:8080.
```
git clone
npm install
npm run build-watch
npm run start-dev
```

##Deploy using the Heroku CLI.
```
heroku create app_name
heroku addons:createheroku-postgresql:hobby-dev
git push heroku master
```
