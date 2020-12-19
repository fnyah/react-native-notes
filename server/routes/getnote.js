var express = require('express');
var router = express.Router();
const { Note } = require('../models');
var db = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Note.find({})
  .then(function(notes) {
    console.log(notes)
      res.send(notes)
  })
});

module.exports = router;


