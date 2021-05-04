'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');

// Global Middleware
app.use(logger);
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Express server!');
});

app.get('/person', validator, (req, res) => {
    res.status(200).json({
        name: req.query.name
    });
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => console.log(`App is running on ${port}`));
}
module.exports = {
    app,
    start
}