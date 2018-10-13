var MongoClient = require('mongodb').MongoClient;

var pw = "cyberblockchaindockermachine";
var db_name = "Big_Data_Containerization_Agile";
var uri = "mongodb+srv://ForFour_admin:" + pw + "@forfour-zhsor.mongodb.net/" + db_name + "?retryWrites=true";

var MongoClient = require('mongodb').MongoClient;

exports.updateRecord = function updateRecord(record_id, attribute, table) {
    MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
        const collection = client.db(db_name).collection(table);
        collection.findOneAndUpdate({ _id: { $eq: record_id } }, { $set: attribute });
        client.close();
    });
}

exports.addRecord = function addRecord(record, table) {
    MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
        const collection = client.db(db_name).collection(table);
        collection.insertOne(record);
        client.close();
    });
}

exports.deleteRecord = function deleteRecord(record_id, table) {
    MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
        const collection = client.db(db_name).collection(table);
        collection.findOneAndDelete({ _id: { $eq: record_id } });
        client.close();
    });
}


exports.getUsers = new Promise(function (resolve, reject) {
    var table = [];
    MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
        const collection = client.db(db_name).collection("Users");
        var cursor = collection.find();
        var promise2 = new Promise(function (resolve, reject) {
            cursor.forEach(function (doc) {
                var promise = new Promise(function (resolve, reject) {;
                    resolve(doc);
                    }).then(function (value) {
                        table.push(value);
                    });
                resolve(table);
            })
        }).then(function (value) {
            client.close();
            resolve(table);
        });
    });
});


var user = { _id: 12346, email: "test@e.ntu.edu.sg", vector: { "a": 0.8, "b": 0.6, "c": 0.9, "d": 0.2, "e": 0.3 }, location: "Singapore", Events: {}, Groups: {}, Friends: {} };
//exports.addRecord(user, "Users");
// users = getTable("Users");
// console.log(users);

// for (var i = 0; i < 50; ++i) {
//     user_id = Math.floor(Math.random() * 100000);
//     rand_vector = [];
//     for (var j = 0; j < 5; ++j) {
//         rand_vector.push(Math.random());
//     }
//     user = {_id: user_id, vector: rand_vector};
//     exports.addRecord(user, "Users");
// }

// MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
//     var collection = client.db(db_name).collection("Users");
//     collection.deleteMany({ });

//     collection = client.db(db_name).collection("Groups");
//     collection.deleteMany({ });
//     client.close();
// });