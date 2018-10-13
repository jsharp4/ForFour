var db = require('./db');
var kmeans = require('node-kmeans');

exports.makeGroups = function makeGroups() {
    db.getUsers.then(function(value) {
        vectors = [];
        for (i in value) {
            //console.log(value[i].vector.rand_vector);
            vectors.push(value[i].vector);
        }
        var num_clusters = Math.floor(vectors.length / 4);
        kmeans.clusterize(vectors, {k: num_clusters}, function (err, res) {
            for (var i in res) {
                if (res[i].clusterInd.length >= 4) {
                    var user_ids = [];
                    for (var i = 0; i < 4; ++i) {
                        user_ids.push(value[i]._id);
                    }
                    db.addRecord({_id: Math.floor(Math.random() * 10000), users: user_ids, ratings: {} }, "Groups");
                }
            }
        })
    }).catch(console.error);
}


exports.makeGroups();


// var vectors = [[2, 4, 3, 1, 6], [3, 4, 5, 2, 3], [6, 3, 4, 2, 9], [3, 7, 8, 4, 2], [1, 4, 5, 6, 5], [7, 2, 1, 4, 3], [8, 2, 2, 2, 2], [7, 4, 1, 3, 3]];
// kMeansCluster(vectors);