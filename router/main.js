// // //main.js
// // var express = require('express');
// // var pg = require('pg');
// // var connectionString = process.env.DATABASE_URL || 'postgres://crumiizobiikcc:kHdIxp-iaHZIKOMrvt80bQazBG@ec2-23-21-73-32.compute-1.amazonaws.com:5432/d4p0rj85qmigoj';
// // //main.js




// module.exports=function(app)
// {
//     app.use(bodyParser.urlencoded({extended : false}));
// app.use(function(req, res, next){
//   if (req.is('text/*')) {
//     req.text = '';
//     req.setEncoding('utf8');
//     req.on('data', function(chunk){ req.text += chunk });
//     req.on('end', next);
//   } else {
//     next();
//   }
// });
// app.get('/',function(req,res){
// res.render('index1.html')
// });
// }
// // app.get('/contact',function(req,res){
// // res.render('contactus.html')
// // });
// // app.get('/about',function(req,res){
// // res.render('about.html');
// // });
// // app.post('/submit', function(req, res) {

// //     var results = [];
// // console.log(req.body);
// // console.log(req.query);
// //     // Grab data from http request
// //     var data = {name: req.body.name, emailid: req.body.emailid};

// //     // Get a Postgres client from the connection pool
// //     pg.connect(connectionString, function(err, client, done) {
// //         var query1 = client.query("SELECT 1 from subscriberlist where emailid like $1",[req.body.emailid]);
// //         // SQL Query > Insert Data
        
// //         if (query1 == 1){
// //             client.end();
// //             return res.send("subscriber");
// //         }
// //         var query = client.query("INSERT INTO subscriberlist(name, emailid) values($1, $2)", [req.body.name, req.body.emailid]);
// //         // After all data is returned, close connection and return results
// //         query.on('end', function() {
// //             client.end();
// //             return res.send("done");
// //         });

// //         // Handle Errors
// //         if(err) {
// //           console.log(err);
// //         }

// //     });
// // });

// // app.post('/contactsubmit', function(req, res) {

// //     var results = [];
// // console.log(req.body);
// // console.log(req.query);
   
// //     // Get a Postgres client from the connection pool
// //     pg.connect(connectionString, function(err, client, done) {

// //         // SQL Query > Insert Data
// //         var query = client.query("INSERT INTO contacts(name, emailid,phone,description) values($1, $2, $3, $4)", 
// //             [req.body.name, req.body.emailid, req.body.phone, req.body.description]);

        
// //         // After all data is returned, close connection and return results
// //         query.on('end', function() {
// //             client.end();
// //             return res.send("done");
// //         });

// //         // Handle Errors
// //         if(err) {
// //           console.log(err);
// //         }

// //     });
// // });
