const mysql = require('mysql');
const express = require('express');

var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

var mysqlConnection = mysql.createConnection({
    host:'us-cdbr-iron-east-04.cleardb.net',
    user:'b8e5aa576a455f',
    password:'107174e5',
    database:'heroku_5c41f846575f70b',
    //socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock' //for mac machine
});

mysqlConnection.connect((err) => {

    if(!err){
        console.log('Database connection success!!!');
    } else{
        console.log('Database connection fail \n Error' + JSON.stringify(err, undefined, 2));
    }
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get('/users', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if(!err){
            res.send(rows);
            console.log(rows);
        } else{
            console.log(err);
        }
    });
});

app.get('/users/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM users WHERE userId = ?', [req.params.id], (err, rows, fields) => {
        if(!err){
            res.send(rows);
            console.log(rows);
        } else{
            console.log(err);
        }
    });
});

app.post('/user', (req, res) => {
    let user = req.body;
    var sql = "INSERT INTO users (username, email, phone_number, skillsets, hobby, dateCreated, dateUpdated) \
                VALUES (?, ?, ?, ?, ?, NOW(), NOW());"
    mysqlConnection.query(sql, [user.username, user.email, user.phone_number, user.skillsets, user.hobby, user.dateCreated, user.dateUpdated], (err, rows, fields) => {
        if(!err){
            res.send('User successfully created!!!');
            console.log(rows);
        } else{
            console.log(err);
        }
    });
});

app.put('/user', (req, res) => {
    let user = req.body;
    var sql = "UPDATE users SET username = ?, email = ?, phone_number = ?, skillsets = ?, hobby = ?, dateUpdated = NOW() WHERE userId = ?;"
    mysqlConnection.query(sql, [user.username, user.email, user.phone_number, user.skillsets, user.hobby, user.userId], (err, rows, fields) => {
        if(!err){
            console.log(user.userId);
            res.send('User successfully updated!!!');
            console.log(rows);
        } else{
            console.log(err);
        }
    });
});

app.delete('/user/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM users WHERE userId = ?', [req.params.id], (err, rows, fields) => {
        if(!err){
            res.send('User successfully deleted!!!');
            console.log(rows);
        } else{
            console.log(err);
        }
    });
});