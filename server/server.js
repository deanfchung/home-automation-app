const express = require('express');
// const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const homeAutoData = require('./data');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // Set up routing
// routes.configure(app);

app.get('/api/homestatus', (req, res) => {
	console.log('homestatus: ', req, res);
	res.json(homeAutoData);
});

//uncaught route handler
app.get('*', (req, res) => {
	res.sendStatus(404);
});

//global error handler
app.use((err, req, res, next) => {
	const defaultErr = {
		log: 'Express error handler caught unknown middleware error',
		status: 400,
		message: { err: 'An error occurred' },
	};
	const errorObj = Object.assign(defaultErr, err);
	console.error(errorObj.log);
	res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});
