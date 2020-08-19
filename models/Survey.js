const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const question = require('./Question')


const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String
  },
   questions : [question],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Survey = mongoose.model('survey', PostSchema);
