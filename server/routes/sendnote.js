var express = require('express');
var router = express.Router();
const { Note } = require('../models');

router.post('/', function(req, res, next) {
  let noteContent = {
    note: req.body.content,
  }

    var note = new Note(noteContent);
    note.save()
    .then(function(note) {
        console.log(note)
    })
    .catch(function(err) {
        console.log(err)
    })
  
    return new HttpResponseMessage(HttpStatusCode.OK)
    
});

module.exports = router;


