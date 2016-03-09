// Defining the schema for blog posts, comments, and featurettes

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');

var db = mongoose.connection;

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// Define schema
var BlogPostSchema = new Schema({
    author : ObjectId,
    title  : String,
    body   : String,
    image  : String, 
    date   : Date
});

var CommentSchema = new Schema({
    name : { type: String, default: '' },
    age  : { type: Number, min: 18, index: true },
    bio  : { type: String },
    date : { type: Date, default: Date.now },
    buff : Buffer
});

var ImageSchema = new Schema({
    path : String
});

// Define models.
var BlogPost = mongoose.model('BlogPost', BlogPostSchema);
var Comment = mongoose.model('Comment', CommentSchema);
var Image = mongoose.model('Image', ImageSchema);

//
var banner = new Image({ path : "/images/header-skyline.jpg" });
console.log(banner.path);
//banner.save();

// Export the schema and models
module.exports = {
    BlogPost : BlogPost,
    Comment  : Comment,
    Image    : Image,
    db : db
}