const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./app/route');
const database = require('./db-connection');
let { db, port: PORT } = require('./app/config/config');
const { initializePassport } = require('./app/auth/passport');

const app = express();
const port = process.env.port ? process.env.port : PORT;

initializePassport(app);
app.use(bodyParser.json());app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/json'}));

app.use('/', express.static(path.resolve(__dirname, './apidocs')));

const errorHandler = (error, req, res, next) => {
  if (error.message) {
    error.code = res.status;
  } else if (error.name && !error.message) {
    error.message = error.name;
  }
  res.body = error;
  next();
};

routes(app);
app.use(errorHandler);

database.initDb(db);
app.listen(port, (err) => {
  if(err) throw err;
  console.log(`App listening on port ${port}`);
});

module.exports = app;
