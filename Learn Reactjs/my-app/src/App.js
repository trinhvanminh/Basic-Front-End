import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="App">
			<header>What's the Plan for Today?</header>
			<TodoForm
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
			/>
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
