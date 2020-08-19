// this is how we set up a web server (RESTful API) using the express framwork
const express = require('express');
const app = express();

// we will use this middleware, so that we can extract the data from the request object
// this will help us to pass the request object
app.use(express.json());

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

// setup and load environment variable (.env)
require('dotenv').config();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
