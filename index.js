const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'NodeCRUD',
    socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock' //for mac machine
});

mysqlConnection.connect((err) => {

    if(!err){
        console.log('Database connection success!!!');
    } else{
        console.log('Database connection fail \n Error' + JSON.stringify(err, undefined, 2));
    }
});