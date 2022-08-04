const express = require ('express');
const {
  getAllCategories,
  addCategory,
  addMovieToCategory,
  deleteMovieFromCategory,
  editMovieInCategory,
} = require ('../controllers/categoriesController');

// Router init
const router = express.Router ();

// Get all Categorys
router.get ('/', getAllCategories);

// Add Category
router.post ('/', addCategory);

// Add movie to the category
router.patch ('/:categoryId/movies', addMovieToCategory);

// Delete movie from the Category
router.delete ('/:categoryId/movies/:movieId', deleteMovieFromCategory);

// Edit Category
router.patch ('/:categoryId/movies/:movieId', editMovieInCategory);

// Exports
module.exports = router;
