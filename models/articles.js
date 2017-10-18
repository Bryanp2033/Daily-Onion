
var mongoose = require('mongoose')
,Schema = mongoose.Schema
,ObjectId = Schema.ObjectId;

var postSchema = new Schema({
 _id: ObjectId,
 title: String,
 link: String,
 date: String
});

module.exports = mongoose.model('Post', postSchema);