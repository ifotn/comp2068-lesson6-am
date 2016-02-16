var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = require('../models/article');

// set up the get handler for the main articles page
router.get('/', function(req, res, next) {
    // use the article model to query the articles collection in the db
    Article.find(function(err, articles) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('articles', {
                title: 'Articles',
                articles: articles
            });
        }
    });


});

// make public
module.exports = router;
