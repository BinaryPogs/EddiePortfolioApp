import React from 'react';
import { faCheck, faCross } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todo = ({text}) => {
    return (
        <div className="todo">
            <li className="todo=item">
                {text}
            </li>
            <button className="complete-btn">
            <FontAwesomeIcon icon={faCheck}/>
            </button>
            <button className="trash-btn">
            <FontAwesomeIcon icon={faCross}/>
            </button>
        </div>
    )
}

export default Todo;