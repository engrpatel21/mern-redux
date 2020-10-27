const Todo = require('../models/todo')

module.exports = {
    index,
    createTodo,
    showTodo,
    updateTodo,
    deleteTodo
}

async function deleteTodo(req, res) {
    await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json({})
}

async function updateTodo(req, res) {
    const todo = await Todo.findOneAndUpdate(req.params.id, req.body, { new: true })
    res.json(todo)
}

async function showTodo(req, res) {
    const todo = await Todo.findById(req.params.id)
    res.json(todo)
}

async function createTodo(req, res) {
    const todo = await Todo.create(req.body)
    res.json(todo)
}

async function index(req, res) {
    const todos = await Todo.find({})
    res.json(todos)
}