var express = require('express');
var app = express();

var inc = require('./increment.js');
app.use('/increment', inc);

var div2 = require('./increment.js');
app.use('/divide', div2);

start = function(){
  console.log("server up at 127.0.0.1:3000")
};

app.listen(3000, "127.0.0.1", 10, start); // port, host, limit, callback
