const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user_router');
const TodoRouter = require("./routers/todo.router");

const app = express();

app.use(bodyParser.json());

app.use('/', userRouter);

app.use('/', TodoRouter);

module.exports = app;
