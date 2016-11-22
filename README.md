# Project Scaffolding

##Includes:
+ Webpack/Babel
+ Postgres/Sequelize
+ Node/Express (including Body Parser)
+ React (including React Router and Rebass)
+ Redux (including Redux Forms)

1. Create local Postgres database and set db_name in db/index.js.
```
psql
CREATE DATABASE db_name;
\q
```

2. Build and serve your project locally. Listen at localhost:8080.
```
git clone
npm install
npm run build-watch
npm run start-dev
```

3. Deploy using the Heroku CLI.
```
heroku create app_name
heroku addons:createheroku-postgresql:hobby-dev
git push heroku master
```
