// action types
import * as actionTypes from "./actionTypes";
// api
import * as api from "../../api";

// delete movie
export const deleteMovieFromCategory =
  (categoryId: Category["_id"], movieId: Movie["_id"]) =>
  async (dispatch: any) => {
    try {
      await api.deleteMovieFromCategory(categoryId, movieId);
      dispatch({
        type: actionTypes.DELETE_MOVIE,
        payload: {
          categoryId,
          movieId,
        },
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

// edit movie
export const editMovieInCategory =
  (categoryId: Category["_id"], movieId: Movie["_id"], movie: Movie) =>
  async (dispatch: any) => {
    try {
      const { data } = await api.editMovieInCategory(
        categoryId,
        movieId,
        movie
      );
      dispatch({
        type: actionTypes.EDIT_MOVIE,
        payload: { data, movieId, categoryId, movie },
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
