var express = require('express');
var db = require('./db');
var pool = require('./pool');
var cors = require('cors');
var http = require('http');

var app = express();

app.use(cors());

var username = "";

function init() {
    app.listen(8081);
    //pool.makeGroups();
}

app.get('/', function(req, res) {
    res.send("CYBER BLOCKHAIN AGILE CONTAINERS COMPUTER VISION BITCOIN FINANCE QUANTITIATIVE DEPLOYMENT");
});

app.get('/questions', function(req, res) {
    db.getTableAttribute("prompt", "Questions").then(function(value) {
        console.log(req);
        res.send(value);
    })
});

app.get('/answers', function(req, res) {
    //TODO convert answers to vector values
    res.send("Stay tuned for updates!");
})

app.get('/itineraries', function(req, res) {
    console.log(req);
    pool.makeGroups();
    db.getSingleAttributes(["events"], {username: res.username}, "Users").then(
        function(value) {
            res.send(value);
        }
    )
})
//name, nationality, birthdate
app.get('/profileInfo', function(req, res) {
    console.log(req);
    user_info = [];
    db.getSingleAttributes(user_info, {username: res.username}, "Users");
})

app.get('/userValidate', function(req, res) {
    console.log("----------------------------------USER VALIDATION-------------------------------------------");
    console.log(req);
    db.getSingleAttributes(["_id"], {email: req.body.account.email, password: req.body.account.password}, "Users").then(
        function(value) {
            if (value != null) res.send(true);
            else res.send(false);
    })
})

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/availabilities', function(req, res) {
    console.log(req);
    db.getSingleAttributes(["_id"], {email: email}, "Users").then(
        function(value) {
            db.updateRecord(value._id, {availability: req.availability}, "Users");
        });
});

app.post('/profileInfo', function(req, res) {
    console.log(req);
    db.getSingleAttributes(["_id"], {username: username}, "Users").then(
        function(value) {
            db.updateRecord(value._id, {name: req.name}, "Users");
            db.updateRecord(value._id, {nationality: req.nationality}, "Users");
            db.updateRecord(value._id, {birthdate: req.birthdate}, "Users");
        });
});

init();