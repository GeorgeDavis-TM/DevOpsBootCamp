require('trend_app_protect');

const express = require("express");

const mysql = require('./services/mysql/mysql-client.js')

const port = 8081;

var app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/test", (req, res) => {
  res.status(200).send("Hello, World!");
});

app.get("/allUserEntries", (req, res) => {
  mysql.getAllUserEntries();
  res.status(200).send("Hello, User Entries!");
});

app.post("/userEntry", (req, res) => {
  mysql.postUserEntry(req.body.user_entry);
  res.status(200).send("Hello, New Entry!");
});

module.exports = app.listen(port, () => {
  process.stdout.write("Listening on port " + port + "\n");
});
