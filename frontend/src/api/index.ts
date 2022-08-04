// modules
import axios from "axios";

// main url
const mainUrl = "http://localhost:5000/api";

// api methods
export const getAllCategories = () => axios.get(`${mainUrl}/categories`);

export const addCategory = (category: Category) =>
  axios.post(`${mainUrl}/categories`, category);

export const addMovie = (categoryId: any, movie: Movie) =>
  axios.patch(`${mainUrl}/categories/${categoryId}/movies`, movie);

export const deleteMovieFromCategory = (
  categoryId: Category["_id"],
  movieId: Movie["_id"]
) => axios.delete(`${mainUrl}/categories/${categoryId}/movies/${movieId}`);

export const editMovieInCategory = (
  categoryId: Category["_id"],
  movieId: Movie["_id"],
  movie: Movie
) =>
  axios.patch(`${mainUrl}/categories/${categoryId}/movies/${movieId}`, movie);
