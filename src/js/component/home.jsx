import React from "react";
// import 

//create your first component
const Home = () => {
	return (
		<div id="container" className="text-center">
			<h1 class="todo-header">To do List</h1>
			<input id="addToDo" type="text" placeholder="Add to do here" />
			<ul>
				
				<li>
					<span><i class="fa fa-trash"></i></span> task
				</li>
			</ul>
		</div>
	);
};

export default Home;
