// this is how we set up a web server (RESTful API) using the express framwork
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Welcome to express web server');
});

app.get('/api/todo', (req, res) => {
	res.send([ { id: 1, todo: 'clean' }, { id: 2, todo: 'landury' } ]);
});

// load environment variable (.env)
require('dotenv').config();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
