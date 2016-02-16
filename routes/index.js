var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'Express' });
});

=======
  res.render('index', { 
      title: 'First Express Page',
        message: 'This works pretty well so far'});
});

/* GET random page */
router.get('/random', function(req, res, next) {
   
    var ranNum = Math.random();
    res.render('random', { title: 'Random',
                          ranNum: ranNum });
});

// make this public so the rest of app can see it
>>>>>>> 48f3afeb17edc094909719f9e70830692e497196
module.exports = router;
