const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

router.post('/', usersCtrl.register)

module.exports = router;