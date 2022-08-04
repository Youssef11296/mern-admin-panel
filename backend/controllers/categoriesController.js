// Modules
const Category = require ('../models/categoryModel');
const Movie = require ('../models/movieModal');
// Modules
const asyncHandler = require ('express-async-handler');

// Controllers
const getAllCategories = asyncHandler (async (req, res) => {
  try {
    const categories = await Category.find ({});
    res.status (200).json ({success: true, data: categories});
  } catch (error) {
    res.status (400).json ({success: false, message: `Error: ${error}`});
  }
});

// Add category
const addCategory = asyncHandler (async (req, res) => {
  try {
    const newCategory = await Category.create (req.body);
    res.status (201).json ({
      success: true,
      data: newCategory,
      message: `${req.body.name} category has been added!`,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: `Error: ${error}`});
  }
});

// Add movie to the category
const addMovieToCategory = asyncHandler (async (req, res) => {
  try {
    await Category.findOne ({_id: req.params.categoryId})
      .then (doc => {
        // item = doc.categories.id (categoryId);
        doc['movies'].push (req.body);
        console.log (doc);

        doc.save ();

        const idx = doc['movies'].length - 1;

        res.status (201).json ({
          success: true,
          data: doc['movies'][idx],
          message: 'Category movies Has been updated!',
        });
      })
      .catch (err => {
        res
          .status (400)
          .json ({success: false, message: `Error: ${err.message}`});
      });
  } catch (error) {
    res
      .status (400)
      .json ({success: false, message: `Error: ${error.message}`});
  }
});

// Delete movie from the category
const deleteMovieFromCategory = asyncHandler (async (req, res) => {
  try {
    await Category.findOne ({_id: req.params.categoryId})
      .then (doc => {
        // item = doc.categories.id (categoryId);
        doc['movies'].pull ({_id: req.params.movieId});

        doc.save ();
        console.log (doc);

        // const idx = doc['movies'].length - 1;

        res.status (201).json ({
          success: true,
          // data: doc['movies'][idx],
          message: 'Category movies Has been updated!',
        });
      })
      .catch (err => {
        res
          .status (400)
          .json ({success: false, message: `Error: ${err.message}`});
      });
  } catch (error) {
    res
      .status (400)
      .json ({success: false, message: `Error: ${error.message}`});
  }
});

// Edit movie in the category
const editMovieInCategory = asyncHandler (async (req, res) => {
  try {
    await Category.update (
      {
        _id: req.params.categoryId,
        movies: {
          $elemMatch: {
            _id: req.params.movieId,
          },
        },
      },
      {
        $set: {
          'movies.$.name': req.body.name,
          'movies.$.describtion': req.body.describtion,
        },
      },
      (err, result) => {
        if (err) {
          res
            .status (400)
            .json ({success: false, message: `Error: ${error.message}`});
        } else {
          // updated.save ();

          console.log (`Result: ${JSON.stringify (result)}`);
          res.status (201).json ({
            success: true,
            message: 'Movie has been successfully updated',
          });
        }
      }
    )
      .clone ()
      .catch (function (err) {
        console.log (err);
      });
    // await updated.save ();
  } catch (error) {
    res
      .status (400)
      .json ({success: false, message: `Error: ${error.message}`});
  }
});

// Exports
module.exports = {
  getAllCategories,
  addCategory,
  addMovieToCategory,
  deleteMovieFromCategory,
  editMovieInCategory,
};
