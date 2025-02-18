
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  city:{
    type:String,
    required:true,
    trim:true
  },
  timeStamp: {
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model('Search', Schema)