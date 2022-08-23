import React from 'react';
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todo = ({text, todo, todos, setTodos}) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el)  => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    // return the item with the completed field flipped
                    ...item,
                     completed: !item.completed
                };
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo=item ${todo.completed ? "completed" : ''}`}>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
            <FontAwesomeIcon icon={faCheck}/>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
            <FontAwesomeIcon icon={faX}/>
            </button>
        </div>
    )
}

export default Todo;