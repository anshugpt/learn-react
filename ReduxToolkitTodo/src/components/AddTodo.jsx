import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addTodo } from "../features/todo/TodoSlice";

export default function AddTodo({todoMsg, isEdit, setIsEdit}){
    const [input, setInput] = useState("")
    // const todoMsg = useSelector(state => state.todoMsg)
    // const [editMsg, setEditMsg] = useState(todoMsg)
    
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    useEffect(() => {
        if(isEdit) {
            setInput(todoMsg)
            setIsEdit(false)
        }
    }, [isEdit])

    return (
        <>
            <div>
                <form onSubmit={addTodoHandler}>
                    <input type="text" placeholder="Write a todo..." value={input} onChange={e => setInput(e.target.value)} className="todo" />
                    { }
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}