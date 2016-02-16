// link to mongoose
var mongoose = require('mongoose');

<<<<<<< HEAD
// define the article schema
var articleSchema = new mongoose.Schema({
   created: {
       type: Date,
       default: Date.now
   },
    title: {
        type: String,
        default: '',
=======
// CREATE THE ARTICLE SCHEMA
var articleSchema = new mongoose.Schema( {
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
>>>>>>> 48f3afeb17edc094909719f9e70830692e497196
        required: 'Title cannot be blank'
    },
    content: {
        type: String,
<<<<<<< HEAD
        default: ''
    }
});

// make this public
=======
        default: '',
        trim: true
    }
});

// make it public
>>>>>>> 48f3afeb17edc094909719f9e70830692e497196
module.exports = mongoose.model('Article', articleSchema);
