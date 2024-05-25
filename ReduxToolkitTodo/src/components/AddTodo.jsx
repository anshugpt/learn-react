import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/todo/TodoSlice";

export default function AddTodo(){
    const [input, setInput] = useState("")
    
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
    return (
        <>
            <div>
                <form onSubmit={addTodoHandler}>
                    <input type="text" placeholder="Write a todo..." value={input} onChange={e => setInput(e.target.value)} />
                    { }
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}