const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

const { configs } = require('./configs');
const routers = require('./apis');
const mssql = require('./connections/mssql');

const port = configs.port;

function initializeMiddlewares() {
  app.use(compression()); // Compress all routes
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());
}
function initializeSecurity() {
  app.use(helmet()); // Secure all routes
}

function initializeErrorHandler() {
  // catch 404 and forward to error handler
}

mssql.db();
initializeSecurity();
initializeMiddlewares();
routers(app);
initializeErrorHandler();

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
