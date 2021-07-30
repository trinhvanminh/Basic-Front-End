import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
	const [newTask, setNewTask] = useState({});
	const [allTasks, setAllTasks] = useState([]);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setNewTask({
			...newTask,
			id: Date.now(),
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newTask.title) return;
		setAllTasks([newTask, ...allTasks]);
		setNewTask({});
	};

	const handleDelete = (taskIdToRemove) => {
		setAllTasks(allTasks.filter((task) => task.id !== taskIdToRemove));
	};

	return (
		<main>
			<h1>Tasks</h1>
			<NewTask
				newTask={newTask}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
			<TasksList allTasks={allTasks} handleDelete={handleDelete} />
		</main>
	);
}
