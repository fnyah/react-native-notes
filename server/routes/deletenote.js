var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var databaseUrl = "testingNotesApp";
var collections = ["noteData"];

var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

router.get('/:id', function(req, res, next) {
    db.noteData.remove(
        {
          _id: mongojs.ObjectID(req.params.id)
        },function(err, removed) {
          if (err) {
            console.log(err)
          } 
          console.log(removed);
        })

    return new HttpResponseMessage(HttpStatusCode.OK)
});

module.exports = router;


