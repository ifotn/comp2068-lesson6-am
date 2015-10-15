var express = require('express');
var router = express.Router();

// add mongoose so we can use the article schema
var mongoose = require('mongoose');

// add a reference to the Article model
var Article = require('../models/article');

// GET articles main page
router.get('/', function(res, res, next) {

    // use the Article model to retrieve all articles
    Article.find(function(err, articles) {
        // if we have an error
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // we got data back
            // show the view and pass the data to it
            res.render('articles/index', {
                title: 'Articles',
                articles: articles
            });
        }
    });


});

// show the add article form
router.get('/add', function(req, res, next) {
    res.render('articles/add', {
        title: 'Add a new Article'
    });
});

// process the submission of a new article
router.post('/add', function(req, res, next) {

    // try to save, and redirect to index if successful
    Article.create( {
        title: req.body.title,
        content: req.body.content
    }, function(err, Article) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/articles');
        }
    });
});

// show the edit page
router.get('/:id', function(req, res, next) {
    // create an id variable
    var id = req.params.id;

    // use mongoose and our model to find the right article
    Article.findById(id, function(err, article) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('articles/edit', {
                title: 'Article Details',
                article: article
            });
        }
    });
});

// process the edit form submission
router.post('/:id', function(req, res, next) {
    var id = req.params.id;

    // create an article object
    var article = new Article( {
        _id: id,
        title: req.body.title,
        content: req.body.content
    });

    // use mongoose to do the update
    Article.update( { _id: id }, article, function(err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/articles');
        }
    });
});

// run delete on the selected article
router.get('/delete/:id', function(req, res, next) {
   var id = req.params.id;

    Article.remove( { _id: id }, function(err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/articles');
        }
    });
});

// make this public so the rest of app can see it
module.exports = router;

