const router = require('express').Router()
const todosCntrl = require('../../controllers/todos')
const auth = require('../../config/auth')


router.get('/', todosCntrl.index)
router.post('/', todosCntrl.createTodo)
router.get('/:id', todosCntrl.showTodo)
router.put('/:id', todosCntrl.updateTodo)
router.delete('/:id', todosCntrl.deleteTodo)

module.exports = router