import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import queryString from "query-string";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import Clock2 from "./components/Clock2";

function App() {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: "title 1" },
		{ id: 2, title: "title 2" },
		{ id: 3, title: "title 3" },
	]);

	const [postList, setPostList] = useState([]);
	const [pagination, setPagination] = useState({
		_page: 1,
		_limit: 10,
		_totalRows: 1,
	});

	const [filters, setFilters] = useState({
		_limit: 10,
		_page: 1,
		title_like: null,
	});

	useEffect(() => {
		async function fetchPostList() {
			try {
				//_limit=10&_page=1
				const paramsString = queryString.stringify(filters);
				const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
				const response = await fetch(requestUrl);
				const responseJSON = await response.json();
				const { data, pagination } = responseJSON;
				setPostList(data);
				setPagination(pagination);
			} catch (error) {
				console.log("Failed to fetch post list: ", error.message);
			}
		}
		fetchPostList();
	}, [filters]);

	const handlePageChange = (newPage) => {
		setFilters({
			...filters,
			_page: newPage,
		});
	};

	const handleTodoClick = (todo) => {
		const index = todoList.findIndex((x) => x.id === todo.id);
		if (index < 0) return;

		const newTodoList = [...todoList];
		newTodoList.splice(index, 1);
		setTodoList(newTodoList);
	};

	const handleOnSubmitForm = (formValues) => {
		if (!formValues.title.trim()) return;

		const newTodo = {
			id: Math.floor(Math.random() * 10000),
			...formValues,
		};
		setTodoList((prev) => [newTodo, ...prev]);
	};

	const handleFiltersChange = (newFilters) => {
		const { searchTerm } = newFilters;
		setFilters({
			...filters, 
			title_like: searchTerm, 
			_page: 1,
		});
	};

	return (
		<div className="app">
			{/* <Clock />
			<Clock2/> */}
			<h1>This is to post list</h1>
			<PostFiltersForm onSubmit={handleFiltersChange} />
			<PostList posts={postList} />
			<Pagination
				pagination={pagination}
				onPageChange={handlePageChange}
			/>
			{/* <TodoForm onSubmit={handleOnSubmitForm} /> */}
			{/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}


		</div>
	);
}

export default App;
