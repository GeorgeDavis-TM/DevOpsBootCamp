var mysql = require('mysql');

var DB_HOST = process.env.DB_HOST;
var DB_USER = process.env.DB_USER;
var DB_PASSWORD = process.env.DB_PASSWORD;
var DB_NAME = process.env.DB_NAME;

var connection = mysql.createConnection({
  host     : DB_HOST,
  user     : DB_USER,
  password : DB_PASSWORD,
  database : DB_NAME
});

//connect to database
connection.connect((err) =>{
    console.log("\n\n\tAttempting to connect to " + DB_NAME + "@" + DB_HOST + ":3306...");
    if(err) throw err;
    console.log('\n\n\tMySQL Connected!');
});

exports.getAllUserEntries = () => {
 
    connection.query('SELECT user_entries FROM tbl_user_entries', function (error, results, fields) {
        if (error) throw error;
        if (results.length)
            console.log('\n\n\tThe solution is: ', results[0].user_entries);
    });
    
};

exports.postUserEntry = (user_entry) => {
 
    connection.query("INSERT INTO tbl_user_entries (user_entries) VALUES (" + user_entry + ");", function (error, results, fields) {
        if (error) throw error;
        console.log('\n\n\tInserted : ' + user_entry);
    });

};
