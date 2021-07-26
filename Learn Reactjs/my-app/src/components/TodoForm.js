import React from "react";

function TodoForm({ todos, setTodos, inputText, setInputText }) {
	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        if(inputText.trim()) {
            setTodos([
                {
                    text: inputText,
                    completed: false,
                    id: Math.floor(Math.random() * 10000),
                },
                ...todos,
            ]);
            setInputText("");
        }
	};

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input
				className="todo-input"
				value={inputText}
				type="text"
				name="text"
				placeholder="Add todo"
				onChange={handleChange}
				autoComplete="off"
			/>
			<button className="todo-button">Add</button>
		</form>
	);
}

export default TodoForm;
