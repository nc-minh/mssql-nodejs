class Controllers {
  index(req, res, next) {
    const data = { message: 'Service Up!' };
    res.json(data);
  }
}

module.exports = new Controllers();
