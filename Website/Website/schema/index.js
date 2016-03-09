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

// Create new model instances for post requests to access.
var new_image = new Image({ path : "" });

var new_blog = new BlogPost( {
    author: "James Earle",
    title: "",
    body: "",
    image: "",
    date: Date.now
});

var new_comment = new Comment( {
    name: "",
    age: 18,
    bio: "",
    date: Date.now,
    buff: Buffer
});

// Export the models and model instances
module.exports = {
    Image       : Image,
    BlogPost    : BlogPost,
    Comment     : Comment,
    new_image   : new_image,
    new_blog    : new_blog,
    new_comment : new_comment
}