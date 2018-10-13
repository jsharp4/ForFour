var db = require('./db');
var event = require('./event');
var kmeans = require('node-kmeans');

var weight = [1, 1, 1, 1, 1];

exports.makeGroups = function makeGroups() {
    db.getUsers.then(function(value) {
        console.log(value);
        vectors = [];
        for (i in value) {
            //console.log(value[i].vector.rand_vector);
            vectors.push(appendAvailability(value[i]));
        }
        var num_clusters = Math.floor(vectors.length / 4);
        kmeans.clusterize(vectors, {k: num_clusters}, function (err, res) {
            console.log(res);
            for (var i in res) {
                if (res[i].clusterInd.length >= 4) {
                    var user_ids = [];
                    for (var j = 0; j < 4; ++j) {
                        user_ids.push(value[res[i].clusterInd[j]]._id);
                    }
                    const rand_id = Math.floor(Math.random() * 10000);
                    db.addRecord({_id: rand_id, users: user_ids, ratings: {} }, "Groups");
                    event.suggestEvent(rand_id);
                }
            }
        })
    }).catch(console.error);
}

function updateWeight(answers, user_id) {
    var vector = [];
    for (i in answers) {
       if (answers[i] == "y") {
           vector.push(1 * weight[i]);
       }
       else vector.push(-1 * weight[i]);
    }

}

function appendAvailability(user) {
    var upTime = user.availability;
    var vector = user.vector;
    vector.push(upTime.start);
    vector.push(upTime.end);
    return vector;
}


//exports.makeGroups();


// var vectors = [[2, 4, 3, 1, 6], [3, 4, 5, 2, 3], [6, 3, 4, 2, 9], [3, 7, 8, 4, 2], [1, 4, 5, 6, 5], [7, 2, 1, 4, 3], [8, 2, 2, 2, 2], [7, 4, 1, 3, 3]];
// kMeansCluster(vectors);