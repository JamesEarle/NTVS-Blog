// When passing parameters to pages use 
// res.render('index', { title: 'my title' });
// to associate variables in Jade

/*
 * GET Requests on all pages
 */

exports.index = function (req, res) {
	res.render('index');
};

exports.photos = function (req, res) {
    res.render('photos');
}

exports.about = function (req, res) {
    res.render('about');
}

exports.work = function (req, res) {
    res.render('work');
};

exports.projects = function (req, res) {
    res.render('projects');
};

exports.extras = function (req, res) {
    res.render('extras', { title: 'Extras' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact'});
};

exports.resume = function (req, res) {
    res.render('resume', { title: 'Resume' });
};

// For the blog, we query MySQL and return blog posts
exports.g_blog = function (req, res) {
    
    var rows = req.connection.query("SELECT * FROM posts", function (err, rows, fields) {
        if (err) throw err
        
        res.render('blog', {
            title: 'Blog',
            posts: rows
        });
    });
};

/*
 * POST Requests on all pages
 */ 

exports.p_blog = function (req, res) {
    var new_image = req.new_image;
    new_image.path = req.body.item;
    new_image.save();

    res.render('index', { title : 'Express' });
};