var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/'));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
	console.log("dirname:"+__dirname)
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(80);
console.log("Running at Port 8080");
