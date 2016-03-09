/*
 * GET Requests on all pages
 */

exports.index = function (req, res) {
	res.render('index', { title: 'Express' });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About' });
};

exports.work = function (req, res) {
    res.render('work', { title: 'Work Experience' });
};

exports.projects = function (req, res) {
    res.render('projects', { title: 'Projects' });
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

// For the blog, we query MongoDB and return blog posts
exports.g_blog = function (req, res) {
    var image = req.Image;

    image.find(function (err, docs) {
        if (err) return console.error(err);
        console.log(docs); // Prints the value we save initially
        res.render('blog', {
            title : 'Blog',
            images: docs
        });
    });

    //Can also put this code here, but no access to the docs from query.
    //res.render('blog', {
    //    title : 'Blog',
    //    images: docs
    //});
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