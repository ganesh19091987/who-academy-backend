var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var app = express();
const config = require('./config');
const port = config.SERVER_PORT;
const resobj = require('./_helpers/responsejson');
var errMsg =require("./constants/errors");
var apiRouter = require('./routes/api');

app.use(cors({
    origin: function(origin, callback){
      // allow requests with no origin (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(config.origins.indexOf(origin) === -1){
        var msg = errMsg.corsMessage;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
app.get('/', function (req, res) {
  res.send('Welcome to WHO Academy!');
});

app.use(function (req, res, next) {
    console.log(req.path)
    next();
  });

  app.use('/api', apiRouter);

  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
   
    res.locals.message = err.message;
    // console.log(err.message);
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500).send(resobj.buildJsonRes("Error", err));
    // res.render('error', { err: err });
  });

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});