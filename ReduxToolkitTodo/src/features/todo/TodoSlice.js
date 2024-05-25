import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name : "todo",
    initialState : initialState,
    reducers: {
        addTodo : (state, action) => {
            const todoData = {
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todoData)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo : (state, action) => {
            state.todos.map(todo => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

const todoReducer = todoSlice.reducer

export default todoReducer