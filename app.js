const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')

const usersRouter = require('./routes/users');

const app = express();



app.use(logger('dev'));
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// Router Middlewares
app.use('/api/user', usersRouter);

// Connected to DB
// Connect to config
dotenv.config()

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser : true },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Connected To DB...');
  });


app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });


// error handler
/*
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});
*/

module.exports = app;