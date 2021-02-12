var express = require('express');
var app = express();


//var serveIndex = require('serve-index')
//Implement Serve Index for directory listing like Apache



// Fetch index file automatically
// app.use(express.static(__dirname + '/static'));

// Fetching particular file instead of index file in static folder

app.get('/', function(req,res){
    res.sendFile(__dirname + '/mypage/index.html');
});

app.use(express.static(__dirname + '/Mypage_files'));

app.use(express.static(__dirname + '/mypage'));
// app.get('/', function(req,res,next){
//     res.send('one');
//     next();
// }, function(req,res,next){
//    console.log("t20");
//    next();
// });

// app.get('/a', function(req,res){
//     res.send('two');
// });
var port=process.env.PORT||3000;
app.listen(port, function(err){
    if(err) throw err;
    console.log("Server is running");
});
