var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var util = require('util');
var multer = require('multer');
var fs = require('fs');


var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(multer({ dest: '/tmp/'}).array('image'));
app.use(express.static('public'));

app.get('/',(req,res) => {
    console.log('test');
    res.sendFile(__dirname + '/index_fileupload.html');
})

app.post('/file_upload',(req,res) => {
    console.log(req.files[0]);
    var dest_file = __dirname + '/'+req.files[0].originalname;
    fs.readFile(req.files[0].path,(err,data) => {
        if(err){
            console.log(err.stack);
        }
        fs.writeFile(dest_file,data,(err) => {
            if(err){
                console.log(err.stack);
            }
            var response = {
                message:'file upload successful',
                file:req.files[0].originalname
            }
            res.end(JSON.stringify(response));
        });
    });
})



var server  = app.listen(8080,() => {
    console.log("sever running on " + server.address().port)
})