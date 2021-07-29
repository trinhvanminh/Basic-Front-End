import React, { useState } from "react";
import NewTask from "./components/NewTask";
import TasksList from "./components/TasksList";

export default function AppFunction() {
	const [newTask, setNewTask] = useState({});
	const [allTasks, setAllTasks] = useState([]);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		// setNewTask({
		// 	...newTask,
		// 	id: Date.now(),
		// 	[name]: value,
		// });
		setNewTask((prev) => ({
			...prev,
			id: Date.now(),
			[name]: value
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!newTask.title) return;
		// setAllTasks([newTask, ...allTasks]);
		setAllTasks((prev) => [newTask, ...prev]);
		setNewTask({});
	};

	const handleDelete = (taskIdToRemove) => {
		// setAllTasks(allTasks.filter((task) => task.id !== taskIdToRemove));
		setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
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
