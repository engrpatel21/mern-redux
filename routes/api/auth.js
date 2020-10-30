const express = require('express');
const router = express.Router();
const authCtrl = require('../../controllers/auth');
const auth = require('../../config/auth')

/*---------- Public Routes ----------*/

router.post('/', authCtrl.auth);
router.get('/user', auth, authCtrl.getUser)

/*---------- Protected Routes ----------*/



module.exports = router;