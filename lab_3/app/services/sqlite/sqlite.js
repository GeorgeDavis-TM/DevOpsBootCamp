const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('tm-appsec-demo.db');

exports.initDB = () => {
    db.serialize(function () {
        db.run("CREATE TABLE IF NOT EXISTS tbl_user_entries(entry_id INT AUTOINCREMENT PRIMARY KEY, user_entries VARCHAR(300), entry_timestamp TIMESTAMP);");        
    });
};

exports.postUserEntry = (user_entry) => {
    db.serialize(function () {
        db.run("INSERT INTO tbl_user_entries (user_entries) VALUES (?);", [
            user_entry
        ]);
    });
};

exports.getAllUserEntries = () => {
    db.serialize(function () {
        db.all("SELECT user_entries FROM tbl_user_entries;", [], (err, rows) => {
            if (err) {å
                console.log(JSON.stringify(err));
                throw err;
            }
            rows.forEach((row) => {
                // console.log(row);
                console.log(row.user_entries + " - " + row.entry_timestamp);
            });
        });
    });
};
