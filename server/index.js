// this is how we set up a web server (RESTful API) using the express framwork
const express = require('express');
const mongoose = require('mongoose');

// import todos routes, so we can just this route as a middleware
const todos = require('./routes/todos');

const app = express();

// we will use this middleware, so that we can extract the data from the request object
// this will help us to pass the request object (so we can use the request body)
/* we are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request */
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Welcome to the Pure Todo API');
});

// use this as a middleware, and forward this (path) request to the todos route, when a user makes a request to this path
app.use('/api/todos', todos);

// setup and load environment variable (.env)
require('dotenv').config();
const port = process.env.PORT || 3000;

mongoose
	.connect(
		'mongodb+srv://LudvigB:Carolina14102019@puredocluster.lebp0.mongodb.net/puredo?retryWrites=true&w=majority',
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then((connectionResult) => {
		app.listen(port, () => console.log(`Server is running on port ${port}`));
	})
	.catch((err) => console.log(err));

app.get('/', (req, res) => {
	res.send('Welcome to express web server');
});

// get all todos
app.get('/api/todos', (req, res) => {
	res.send(todos);
});

// get a single todo
app.get('/api/todos/:id', (req, res) => {
	const todo = todos.find((todo) => todo.id === parseInt(req.params.id)); // req.params.id returns a String

	if (!todo) {
		res.status(404).send('The todo cannot be found');
	}

	res.send(todo);
});

app.put('/api/todos/:id', (req, res) => {
	const selectedTodo = todos.find((todo) => todo.id === parseInt(req.params.id));

	if (!selectedTodo) {
		return res.status(404).send('The todo cannot be found');
	}

	selectedTodo.todo = req.body.todo;

	res.send({
		message: 'Todo updated',
		data: selectedTodo
	});
});

app.delete('/api/todos/:id', (req, res) => {
	const todo = todos.find((todo) => todo.id === parseInt(req.params.id));

	if (!todo) {
		return res.status(404).send('The todo cannot be found');
	}

	const index = todos.indexOf(todo);
	todos.splice(index, 1);

	res.send({
		message: 'Todo deleted',
		data: todo
	});
});
