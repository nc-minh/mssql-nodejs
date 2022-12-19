const dotenv = require('dotenv');
const dotenvSafe = require('dotenv-safe');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
dotenvSafe.config({
  allowEmptyValues: false,
});

const configs = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 9090,
  msSql: {
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PASSWORD,
    server: process.env.MSSQL_SERVER,
    database: process.env.MSSQL_DATABASE,
  },
};

exports.configs = configs;
