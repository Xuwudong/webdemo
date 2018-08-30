var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.send("hello get");
})

app.post('/',(req,res) => {
    res.send("hello post");
})

app.get('/test',(req,res) => {
    res.send("hello test");
})

app.get('/ab*cd',(req,res) => {
    res.send("正则匹配");
})

var server  = app.listen(8080,() => {
    console.log("sever running on " + server.address.port)
})