import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

function TodoList({ todos }) {
	return (
		<Ul>
			{todos.map((todo) => (
				<Todo todo={todo.text} key={todo.id} />
			))}
		</Ul>
	);
}

const Ul = styled.ul`
    padding: 0;
    margin: 0;
`

export default TodoList;
