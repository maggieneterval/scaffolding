# Project scaffolding

##Includes:
-Webpack/Babel
-Postgres/Sequelize
-Node/Express
-React (including React Router and Rebass)
-Redux (including Redux Forms)

##Create local Postgres database:
```
psql
CREATE DATABASE db_name
\q
```

##Dev setup:

```
git clone
npm install
```

-create local postgres database and set name in db/index.js

```
-npm start
```

Deploy:
-provision heroku/postgres hobby-dev db
-create new heroku project
-add and push to heroku master