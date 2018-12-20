const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');

const app = express();
const db = require('./config/keys').mongoURI;

mongoose
	.connect(
		db,
		{ useNewUrlParser: true }
	)
	.then(() => {
		console.log('Connected to the database.');
	})
	.catch(err => {
		console.log(err);
	});

app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);

// noinspection ES6ModulesDependencies
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server listening on port ${port}...`);
});
