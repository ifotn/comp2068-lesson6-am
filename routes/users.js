var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.send('respond with a resource');
});

=======
  //res.send('respond with a resource');
    
    var usernames = ['Me', 'You', 'Them'];
    
    // show the users.ejs view in the browser
    res.render('users', { title: 'Users',
                         users: usernames });
});


>>>>>>> 48f3afeb17edc094909719f9e70830692e497196
module.exports = router;
