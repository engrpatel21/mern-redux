import { GET_TODO, ADD_TODO, DELETE_TODO } from './types'

export const getTodos = () => {
    return {
        type: GET_TODO
    }
}