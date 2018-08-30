var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'html');

app.get('/',(req,res) => {
    res.render("index", { message: "Hello World" });
    res.sendFile(__dirname + '/index.html');
})

app.get('/process_get',(req,res) => {
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    res.end(JSON.stringify(response));
})



var server  = app.listen(8081,() => {
    console.log("sever running on " + server.address.port)
});