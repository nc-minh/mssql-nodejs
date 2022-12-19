const mssql = require('../../../connections/mssql.js');

class Services {
  async getAllUsers() {
    try {
      const data = await (await mssql.db()).query`SELECT * FROM users`;

      return data.recordset;
    } catch (error) {
      console.log(`Error getting all users: ${error}`);
    }
  }

  async createAUser(user) {
    try {
      const data = await (
        await mssql.db()
      )
        .query`INSERT INTO users (ID, username) VALUES (${user.ID}, ${user.username})`;

      return data.rowsAffected;
    } catch (error) {
      console.log(`Error creating a user: ${error}`);
    }
  }
}

module.exports = new Services();
