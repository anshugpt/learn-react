import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/TodoSlice";
import AddTodo from "./AddTodo";

export default function Todos() {
    const todos = useSelector(state => state.todos)
  
    const dispatch = useDispatch()
    

    return (
        <>
            <AddTodo/>
            {todos.map(todo => (
                <li key={todo.id}>
                    <span>
                        {todo.text}
                    </span>
                    {/* <button onClick={() => setTodoMsg(todo.text)}>edit</button> */}
                    { }
                    <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                </li>
            ))}
        </>
    )
}