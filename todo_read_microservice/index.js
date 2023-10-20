const express = require("express");
const app = express();
const port = 3002;

const todos = ["some todos", "1,skjdjr", "2,dkdjd"];

app.get("/todos", (req, res) => {
	res.json(todos);
});

app.listen(port, () => {
	console.log(
		`Todo Retrieval Microservice is listening on http://localhost:${port}`
	);
});
