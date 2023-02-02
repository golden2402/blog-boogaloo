const express = require('express')
const logger = require('morgan')

// routes:
const apiRouter = require('./routes/api')

let app = express();

// middleware:
app.use(logger("dev"))
app.use(express.json())

app.use('/api', apiRouter);
// invalid routes:
app.use('*', (_, response) => {
  response.status(404).send();
});

module.exports = app