const movieSchema = require ('./movieModal');
const mongoose = require ('mongoose');

// Schama
const categorySchema = new mongoose.Schema ({
  name: {
    type: String,
    reuired: true,
    minlength: [3, 'Category name must contain 3 letters at least!'],
    maxlength: [30, 'Category name can not contain more than 15 letters!'],
  },
  describtion: {
    type: String,
    minlength: [5, 'Category describtion must contain 10 letters at least!'],
    maxlength: [
      400,
      'Category describtion can not contain more than 400 letters!',
    ],
  },
  movies: [movieSchema],
});

// Exports
module.exports = mongoose.model ('Category', categorySchema);
