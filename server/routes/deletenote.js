var express = require('express');
var router = express.Router();
const { Note } = require('../models');
var db = require("../models");


router.get('/:id', function(req, res, next) {
  db.Note.findByIdAndDelete(req.params.id, function(err) {
    if (err) {
      console.log(err)
    }
    console.log("Deleted one!: " + req.params.id)
  })

  return new HttpResponseMessage(HttpStatusCode.OK)
});

module.exports = router;


