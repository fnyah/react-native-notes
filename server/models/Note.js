let mongoose = require('mongoose');

let noteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true,
        trim: true, 
      },
    createdAt: {
        type: Date, 
        default: Date.now
    }
})

let Note = mongoose.model('Note', noteSchema)
module.exports = Note; 