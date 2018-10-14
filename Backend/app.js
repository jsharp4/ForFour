var express = require('express');
var db = require('./db');
var pool = require('./pool');
var cors = require('cors');
var http = require('http');

var app = express();

app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var email = "";

function init() {
    app.listen(8081);
    console.log("Listening on port 8081");
    //pool.makeGroups();
}

app.get('/', function(req, res) {
    res.send("CYBER BLOCKHAIN AGILE CONTAINERS COMPUTER VISION BITCOIN FINANCE QUANTITIATIVE DEPLOYMENT");
});

app.get('/questions', function(req, res) {
    db.getTableAttribute("prompt", "Questions").then(function(value) {
        //console.log(req);
        console.log(value);
        var list = {};
        var questions = [];
        for (i in value) {
            var add = {id: i, question: value[i]};
            questions.push(add);
        }
        list["results"] = questions;
        console.log(list);
        res.send(list);
    })
});

app.get('/answers', function(req, res) {
    //TODO convert answers to vector values
    db.getSingleAttributes(["_id"], {email: email}, "Users").then(function(value) {
        pool.updateVector(res.body[0], value);
    });
    res.send("Message received.");
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

app.post('/userValidate', function(req, res) {
    console.log("----------------------------------USER VALIDATION-------------------------------------------");
    console.log(req);
    email = req.body.email;
    db.getSingleAttributes(["_id"], {email: req.body.email, password: req.body.password}, "Users").then(
        function(value) {
            console.log("FIND VALUE: " + value);
            if (value == null) res.send(false);
            else res.send(true);
    })
})

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
