
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

var mysql = require("mysql");

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "", //secret
    database : "ntvs_blog"
});

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting to MySQL! " + err.stack);
        return
    }
});


// Get application routes and begin express
var routes = require('./routes');
var app = express();

// Make the database visible to the router
app.use(function (req, res, next) {
    req.connection = connection;
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
app.get('/photos', routes.photos);
app.get('/blog', routes.g_blog);

// Add POST Requests
app.post('/blog', routes.p_blog);

// Start the server
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

// For references on MongoDB connection, this tutorial is helpful
// http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/