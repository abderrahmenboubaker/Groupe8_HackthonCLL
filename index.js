var express = require('express');
var app = express();
const sequelize = require("./database");
const User = require("./domain/user");

// define routes here..


sequelize
  .sync()
  .then(res => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });


app.get('/', function (req, res) {
    User.create({
        email: "marwafejji@gmail.com",
        password: "dfqd" ,
        username :"username",
        firstname :"firstname",
        lastname :"lastname"})
        .then(
            console.log("ouii")
        )
    User.update({

    })
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5001, function () {
    console.log('Node server is running..')
})