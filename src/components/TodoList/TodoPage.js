import './index.scss'
import React, { useState, useEffect } from "react";
import Form from './Form'
import AnimatedLetters from '../AnimatedLetters'
import TodoList from './TodoList';

const TodoPage = () => {
    //States
    const [inputText, setInputText] = useState("");
    const [todos,setTodos] = useState([])
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [letterClass, setLetterClass] = useState('text-animate')


    //RUN ONCE when the app starts
    useEffect(() => {
        getLocalTodos();
    }, []);

    //Use effect
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos,status]);

    //Functions
    const filterHandler = () => {
        switch(status){
            //if condition is completed, filter only those todos where todo.completed is true
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            //if condition is uncompleted, filter only those todos where todo.completed is false
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos);
        }
    };

    //Save to local
    const saveLocalTodos = () => {
        if (todos.length > 0){
        localStorage.setItem('todos', JSON.stringify(todos));
        }
        };
    

    //Get local todos
    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]));
        }
        else{
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    };


    return (
        <div className='App'>
            <header>
            <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['E', 'd', "'", 's', ' ', 'T', 'o', '-', 'd','o', ' ', 'L', 'i','s','t']}
                        idx={15}
                    />
                </h1>
            </header>
            <Form 
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
            setStatus={setStatus}
            />
            <TodoList 
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            />
        </div>
    )
    }

export default TodoPage