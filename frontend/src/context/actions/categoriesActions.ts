// action types
import * as actionTypes from "./actionTypes";
// api
import * as api from "../../api";

// get all categories
export const getAllCategories = () => async (dispatch: any) => {
  try {
    const { data } = await api.getAllCategories();
    dispatch({
      type: actionTypes.GET_ALL_CATEGORIES,
      payload: data.data,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

// add category
export const addCategory = (category: Category) => async (dispatch: any) => {
  try {
    const { data } = await api.addCategory(category);
    const newCategory = { id: data, ...category };
    dispatch({
      type: actionTypes.ADD_CATEGORY,
      payload: newCategory,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

// add movie
export const addMovie =
  (categoryId: Category["_id"], movie: Movie) => async (dispatch: any) => {
    try {
      const { data } = await api.addMovie(categoryId, movie);

      dispatch({
        type: actionTypes.ADD_MOVIE,
        payload: { data: data.data, categoryId },
      });
    } catch (error) {
      console.log({ categoryId });

      console.log(`Error: ${error}`);
    }
  };
