import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/TodoSlice";
import AddTodo from "./AddTodo";

export default function Todos() {
    const todos = useSelector(state => state.todos)
  
    const dispatch = useDispatch()

    const [todoMsg, setTodoMsg] = useState("")
    const [isEdit, setIsEdit] = useState(false)
    

    return (
        <>
            <AddTodo todoMsg={todoMsg} isEdit={isEdit} setIsEdit={setIsEdit}/>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span>
                        {todo.text}
                    </span>
                    <button onClick={() => {setTodoMsg(todo.text)
                        setIsEdit(true)
                        dispatch(removeTodo(todo.id))
                    }}>edit</button>
                    { }
                    <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                </li>
            ))}
        </>
    )
}