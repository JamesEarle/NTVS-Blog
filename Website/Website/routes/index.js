
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
exports.blog = function (req, res) {
    var image = req.image;
    
    image.find(function (err, docs) {
        if (err) return console.error(err);
        console.log("These are the docs");
        console.log(docs);
        res.render('blog', {
            title : 'Blog',
            images: docs 
        });
    });

    //collection.find({}, {}, function (e, docs) {
    //    res.render('blog', {
    //        title : 'Blog',
    //        images: docs
    //    });
    //});

    //res.render('blog', { title: 'Blog' });
};