var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var databaseUrl = "testingNotesApp";
var collections = ["noteData"];


var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

router.post('/', function(req, res, next) {
  let note = req.body.content;

  db.noteData.insert(
    {
      content: note
    },
    function(error, inserted) {
      if (error) {
        console.log(error);
      }
      else {
        console.log(inserted);
      }
    }
  );
  return new HttpResponseMessage(HttpStatusCode.OK)
});

module.exports = router;


