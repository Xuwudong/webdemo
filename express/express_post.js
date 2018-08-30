var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var util = require('util');

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.use(express.static('public'));

app.get('/',(req,res) => {
    console.log('test')
    res.sendFile(__dirname + '/index.html');
})

app.post('/process_get',urlencodedParser,(req,res) => {
    console.log(util.inspect(req))
    console.log(req.params);
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    res.end(JSON.stringify(response));
})



var server  = app.listen(8081,() => {
    console.log("sever running on " + server.address().port)
})