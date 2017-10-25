
var mongoose = require('mongoose')

Schema = mongoose.Schema;

// Post model
var postSchema = new Schema({
 title:{
     type: String,
     required: true
 },
 link: {
     type: String,
     required: true
 },
 date: {
     type: String,
     required: true
 },
 saved: {
     type: Boolean,
     default: false,
     required: true
 },
 // has many notes
 note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;