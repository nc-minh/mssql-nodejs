const healthRouter = require('./health');
const v1Router = require('./v1');

function routeMap(app) {
  app.use('/health', healthRouter);
  app.use('/v1', v1Router);
}

module.exports = routeMap;
