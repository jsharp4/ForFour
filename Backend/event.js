var db = require('./db');

var event = {_id: Math.floor(Math.random() * 10000), Name: "iNTUition", Start: "11:00-10-13-2018", End: "13:00-10-14-2018", Location: "NTU"};

exports.suggestEvent = function suggestEvent(group_id) {
    db.getSingleAttributes(["users"], {_id: group_id}, "Groups").then(function(value) {
        for (i in value.users) {
            console.log(value);
            var user = value.users[i];
            console.log(value.users[i]);
            db.addEvent(user, event);
        }
    })
}

//exports.suggestEvent(1415);
