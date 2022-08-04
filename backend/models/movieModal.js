const mongoose = require ('mongoose');

// Schama
const movieSchema = new mongoose.Schema ({
  name: {
    type: String,
    reuired: true,
    minlength: [3, 'Movie name must contain 3 letters at least!'],
    maxlength: [100, 'Movie name can not contain more than 100 letters!'],
  },
  describtion: {
    type: String,
    minlength: [3, 'Movie describtion must contain 3 letters at least!'],
    maxlength: [
      400,
      'Movie describtion can not contain more than 400 letters!',
    ],
  },
  rate: {
    type: Number,
  },
});

// Exports
module.exports = movieSchema;
