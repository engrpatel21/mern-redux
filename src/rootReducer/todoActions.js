import { GET_TODO, ADD_TODO, DELETE_TODO, TODO_LOADING } from './types'
import axios from 'axios'

export const getTodos = () => dispatch => {
    dispatch(todosLoading())
    axios
        .get('/api/todos')
        .then(res => {
            dispatch({
            type: GET_TODO,
            payload: res.data
        })})
}

export const deleteTodo = id => dispatch => {
    dispatch(todosLoading())
    axios
        .get(`api/todos/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_TODO,
                payload: id
            })
        )
}

export const addTodo = (name) => dispatch => {
    dispatch(todosLoading())
    axios
        .post('/api/todos', name)
        .then(res =>
            dispatch({
                type: ADD_TODO,
                payload: res.data
            })    
        )
}

export function todosLoading(){
    return {
        type: TODO_LOADING
    }
}