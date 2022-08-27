import React, { useState, useEffect } from "react";
import Form from "./component/Form";
import TodoList from "./component/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="App">
			<header>
				<h1>What To Do?</h1>
			</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
}
export default App;