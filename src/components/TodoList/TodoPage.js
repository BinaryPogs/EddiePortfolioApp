import './index.scss'
import React, { useState } from "react";
import Form from './Form'
import TodoList from './TodoList';

const TodoPage = () => {
    const [inputText, setInputText] = useState("");
    const [todos,setTodos] = useState([])
    return (
        <div className='App'>
            <header>
                <h1>Ed's Todo List</h1>
            </header>
            <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
            <TodoList todos={todos}/>
        </div>
    )
    }

export default TodoPage