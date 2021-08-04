import React from 'react'

function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => <Todo todo={todo}/>)}
        </ul>
    )
}
export default TodoList;
