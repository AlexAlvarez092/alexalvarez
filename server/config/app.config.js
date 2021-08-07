/* eslint-disable import/no-dynamic-require */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { join } = require('path');
const fs = require('fs');
// const bodyParser = require('body-parser');

// const apiRouter = require(join(__dirname, '../routes/api.router'));

const app = express();

app.set('port', process.env.PORT);

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(helmet());
app.use(express.static(join(__dirname, '../public')));
// app.use('/api', apiRouter);

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(join(__dirname, '../../../logs/access.log'), { flags: 'a' });

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../views/index.html'));
});

module.exports = app;
