// this is how we set up a web server (RESTful API) using the express framwork
const express = require('express');
const mongoose = require('mongoose');

// import todos routes, so we can just this route as a middleware
const todos = require('./routes/todos');
const auth = require('./routes/auth');

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

app.use('/api/users', auth);

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
