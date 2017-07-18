var express = require("express");
//var mysql = require('mysql');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
response.send('Hello World!!!! AAAAAAAAAAAA') ;
}) ;

/*
var connection = mysql.createConnection({
    host: 'jlg7sfncbhyvga14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'e9rhv9wpwaeuqxe9',
    password: 'nkztklojrw7d2fr3',
    database: 'fnyv85ghptt684va'
});

connection.connect();

app.get('/', function(request, response) {
	    connection.query('SELECT * from t_users', function(err, rows, fields) {
        if (err) {
            console.log('error: ', err);
            throw err;
        }
        response.send(['Hello World!!!! HOLA MUNDO!!!! Samir', rows]);
    });
        
        
});
*/
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
