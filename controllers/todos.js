const Todo = require('../models/todo')

module.exports = {
    index,
    createTodo
}

async function createTodo(req, res) {
    const todos = await Todo.create(req.body)
    console.log(req.body)
    console.log(todos)
    res.json(todos)
}

async function index(req, res) {
    const todos = await Todo.find({})
    console.log(todos)
    res.json(todos)
}