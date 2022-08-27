import React, { useEffect } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/1/todos")
			.then((response) => response.json())
			.then((todos) => {
				setTodos(todos);
			});
	}, []);

	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						setTodos={setTodos}
						todos={todos}
						todo={todo}
						text={todo.text ? todo.text : todo.title}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
