const router = require('express').Router()
const todosCntrl = require('../../controllers/todos')


router.get('/', todosCntrl.index)
router.post('/', todosCntrl.createTodo)

module.exports = router