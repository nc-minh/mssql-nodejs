const service = require('./service');

class Controllers {
  async getAllUsers(req, res, next) {
    const data = await service.getAllUsers();
    res.json(data);
  }

  async createAUser(req, res, next) {
    const { ID, username } = req.body;
    const data = await service.createAUser({ ID, username });
    res.json(data);
  }
}

module.exports = new Controllers();
