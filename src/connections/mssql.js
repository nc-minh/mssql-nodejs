const { configs } = require('../configs');
const sql = require('mssql');

const sqlConfig = {
  user: configs.msSql.user,
  password: configs.msSql.password,
  server: configs.msSql.server,
  database: configs.msSql.database,
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  trustServerCertificate: true,
};

const db = async () => {
  try {
    console.log('Connecting to MSSQL...');

    const conn = await sql.connect(sqlConfig);

    console.log('Connected to MSSQL');

    return conn;
  } catch (error) {
    console.log(`Error connecting to MSSQL: ${error}`);
  }
};

exports.db = db;
