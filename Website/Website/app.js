
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// DB Requires
var mongo = require('mongodb');

// This connection is refused until we run the MongoDB daemon
// in the background. Do this using the below command
// 'mongod --dbpath /d/Development/NodeJS/NTVS/Blog/Blog/data'

// Be sure to require the MongoDB Schema
var schema = require('./schema/');
var db = schema.db;

// find application routes
var routes = require('./routes');

var app = express();

// Make the database visible to the router
app.use(function (req, res, next) {
    req.image = schema.image;
    

    req.blog = schema.BlogPost;
    req.comment = schema.Comment;

    //req.db = schema.db;
    //req.new_image = schema.new_image;
    next();
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

// Add GET Requests
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/work', routes.work);
app.get('/projects', routes.projects);
app.get('/extras', routes.extras);
app.get('/contact', routes.contact);
app.get('/resume', routes.resume);
app.get('/blog', routes.g_blog);

// Add POST Requests
app.post('/blog', routes.p_blog);

// Start the server
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

// For references on MongoDB connection, this tutorial is helpful
// http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/