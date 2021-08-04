import React from 'react'

function Todo({ todo }) {
    return (
        <li key={todo.id}>
            <input type="checkbox" name="" id="input-checkbox"/>
            <label for="input-checkbox">{todo.title}</label>
            <button>X</button>
        </li>
    )
}

export default Todo
