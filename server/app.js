require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const path = require('path');
const app = express()

app.use(express.json());

app.use(morgan(function (tokens, req, res) {
  const myTiny =[tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms']
  if (req.method === 'POST' || req.method === 'PUT' ) {
    return myTiny.concat([JSON.stringify(req.body)]).join(' ')
  } else {
    return myTiny.join(' ')
  }
}));

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  };

  next(error);
};

app.use(errorHandler);

module.exports = app;
