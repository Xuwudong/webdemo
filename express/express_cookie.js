var express = require('express');
var app = express();
var cookieparser = require('cookie-parser');
var util = require('util');
app.use(cookieparser());
app.get('/',(req,res) => {
    console.log(util.inspect(req));
    console.log(util.inspect(req.cookie));
})



var server  = app.listen(8080,() => {
    console.log("sever running on " + server.address().port)
})