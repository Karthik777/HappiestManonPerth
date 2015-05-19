var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sprintf = require('sprintf');
app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.use('/assets', express.static(__dirname + '/assets'));
// require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// app.get('/', function(request, response) {
//   response.send('Hello World!');
// });

buffer='';
app.get('/',function(req,res){
res.render('input.html')
});

   app.use(bodyParser.urlencoded({extended : false}));
app.use(function(req, res, next){
  if (req.is('text/*')) {
    req.text = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){ req.text += chunk });
    req.on('end', next);
  } else {
    next();
  }
});

app.post('/go', function(request, response) {
  var http = require('http');
  var path1 = sprintf('/todo/api/v1.0/users/?year=%s&sentiment=%s&hour=%s', request.body.year,request.body.sentiment,request.body.hour);
var optionsget = {
    host : '127.0.0.1',
    port : 5000,
    path : path1,
    method : 'GET'
};


console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');

var reqGet = http.get(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);

    res.on('data', function(d) {
        //console.info('GET result:\n');
        //process.stdout.write(d);
        buffer += d.toString();
        //console.info('\n\nCall completed');
    });

    res.on('end', function() {
        console.info('GET result:\n');
        console.log(buffer);
        //var d = JSON.parse(buffer);
        // console.log(d);
        response.send(buffer);
        console.info('\n\nCall completed');
    });

});
reqGet.on('error', function(e) {
    console.error(e);
});

reqGet.end();
  //console.log(buffer);
  //response.send(response.buffer);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
