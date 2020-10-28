/* eslint-disable import/no-anonymous-default-export */
import {GET_TODO, ADD_TODO, DELETE_TODO} from './types'

const initialState = {
    todos: [
        { id: 1, name: 'todo1' },
        { id: 2, name: 'todo2' },
        { id: 3, name: 'todo3' },
        { id: 4, name: 'todo4' }, 
    ],
}

export default function(state = initialState, action){
    switch (action.type) {
        case 'GET_TODO':
            return {
                ...state
            }
        default:
            return state
    }
}
