const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 3003;

app.use(bodyParser.json());

// Use environment variables to get service URLs
const creationServiceUrl = process.env.CREATION_SERVICE_URL || "http";
const retrievalServiceUrl =
	process.env.RETRIEVAL_SERVICE_URL || "http://localhost:3002";

// Create a new Todo
app.post("/todos", async (req, res) => {
	try {
		const { text } = req.body;
		const response = await axios.post(`${creationServiceUrl}/todos`, { text });
		res.json(response.data);
	} catch (error) {
		res.status(500).send("Error creating Todo");
	}
});

// Read all Todos
app.get("/todos", async (req, res) => {
	try {
		const response = await axios.get(`${retrievalServiceUrl}/todos`);
		res.json(response.data);
	} catch (error) {
		res.status(500).send("Error retrieving Todos");
	}
});

app.listen(port, () => {
	console.log(
		`Todo Client Microservice is listening on http://localhost:${port}`
	);
});
