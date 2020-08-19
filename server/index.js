// this is how we set up a web server (RESTful API) using the express framwork
const express = require('express');
const mongoose = require('mongoose');

// import todos routes, so we can just this route as a middleware
const todos = require('./routes/todos');

const app = express();

// we will use this middleware, so that we can extract the data from the request object
// this will help us to pass the request object (so we can use the request body)
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

const todos = [ { id: 1, todo: 'clean' }, { id: 2, todo: 'landury' }, { id: 3, todo: 'dishes' } ];

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

// create a todo
app.post('/api/todos', (req, res) => {
	// terminate this function if there is no todo
	if (!req.body.todo) {
		return res.status(400).send('Todo is required'); // bad request
	}

	// we need a way to pass the request object into our todos array
	// -> so that we can extract the data from it (request object)
	// -> to do that, we are going to make use of a middleware
	const todo = {
		id: todos.length + 1,
		todo: req.body.todo
	};

	todos.push(todo);
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
