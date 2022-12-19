const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.getAllUsers);
router.post('/', controller.createAUser);

module.exports = router;
