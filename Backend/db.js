var MongoClient = require('mongodb').MongoClient;

var pw = "cyberblockchaindockermachine";
var db_name = "Big_Data_Containerization_Agile";
var uri = "mongodb+srv://ForFour_admin:" + pw + "@forfour-zhsor.mongodb.net/" + db_name + "?retryWrites=true";

var MongoClient = require('mongodb').MongoClient;

exports.updateRecord = function updateRecord(record_id, attribute, table) {
    MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
        const collection = client.db(db_name).collection(table);
        collection.updateOne({ _id: { $eq: record_id } }, { $set: attribute });
        client.close();
    });
}

exports.newAttr = function newAttr(record_id, attribute, table) {
    MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
        const collection = client.db(db_name).collection(table);
        collection.findOneAndUpdate({ _id: { $eq: record_id } }, { $addToSet: attribute });
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

exports.getTableAttribute = function getTableAttribute(attribute, table) {
    return new Promise(function(resolve, reject) {
        MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
            const collection = client.db(db_name).collection(table);
            resolve(collection.distinct(attribute));
            client.close();
        });
    });
}

exports.getSingleAttributes = function getSingleAttributes(attributes, query, table) {
    return new Promise(function(resolve, reject) {
        var projections = {};
        for (i in attributes) {
            projections[attributes[i]] = 1;
        }
        MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
            const collection = client.db(db_name).collection(table);
            resolve(collection.findOne(query, projections));
            client.close();
        });
    });
}

exports.addEvent = function addEvent(user_id, new_event) {
    MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
        const collection = client.db(db_name).collection("Users");
        collection.findOneAndUpdate({_id: user_id}, {$set: {events: [new_event]}});
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

//questions = ["What is your name?", "What is your quest?", "What is your favorite color?", "What is the capital of Assyria?", 
 //          "What is the average air-speed velocity of an unladen swallow?"];
// MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
//     var collection = client.db(db_name).collection("Users");
//        collection.insertOne({email: "test_user@gmail.com", password: "test" }); 
//     client.close();
// });

// MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
//     var collection = client.db(db_name).collection("Users");
//        collection.insertOne({email: "test_user@gmail.com", password: "test", _id: 8675309, events: [], groups: []}); 
//     client.close();
// });