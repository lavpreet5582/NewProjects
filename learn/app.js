const express = require('express');

const cookieParser = require('cookie-parser');

const userRouter = require('./Routers/userRouter');
// const authRouter = require('./Routers/authRouter');

const app = express();

app.use(express.json());
app.listen(3000);
app.use(cookieParser());

app.use('/user', userRouter);
// app.use('/auth', authRouter);










