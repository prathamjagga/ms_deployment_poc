const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(bodyParser.json());

const todos = [];

app.post("/todos", (req, res) => {
	const { text } = req.body;
	const newTodo = { text, id: todos.length + 1 };
	todos.push(newTodo);
	res.json(newTodo);
});

app.listen(port, () => {
	console.log(
		`Todo Creation Microservice is listening on http://localhost:${port}`
	);
});
