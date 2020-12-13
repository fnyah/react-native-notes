var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var databaseUrl = "testingNotesApp";
var collections = ["noteData"];

var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

/* GET home page. */
router.get('/', function(req, res, next) {
    db.noteData.find({}, function(err, data) {
        if (err) {
          console.log("error: " + err)
        } else {
          res.send(data)
        }
      })
});

module.exports = router;


