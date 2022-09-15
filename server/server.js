const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const initialData = require('./data');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/status', (req, res) => {
	res.json(initialData);
});

app.patch('/api/temperature', (req, res) => {
	res.status(200).json(`Temperature updated to ${req.body.temperature}`);
});

app.patch('/api/blinds', (req, res) => {
	res.status(200).json(
		`Blinds successfully updated to ${!req.body.status ? 'Open' : 'Closed'}`
	);
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
