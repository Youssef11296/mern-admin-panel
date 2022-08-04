// action types
import * as actionTypes from "../actions/actionTypes";

// initial state
const initialState = {
  categoriesList: [],
};

// movies reducer
const categoriesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CATEGORIES:
      return {
        ...state,
        categoriesList: action.payload,
      };
    case actionTypes.ADD_CATEGORY:
      console.log(`ADD Categ: ${action.payload}`);
      return {
        ...state,
        categoriesList: [...state.categoriesList, action.payload],
      };
    case actionTypes.ADD_MOVIE:
      console.log(action.payload);
      return {
        ...state,
        categoriesList: [
          ...state.categoriesList.map((category: any) =>
            category._id === action.payload.categoryId
              ? {
                  ...category,
                  movies: [...category.movies, action.payload.data],
                }
              : category
          ),
        ],
      };
    case actionTypes.EDIT_MOVIE:
      console.log(`EDIT MOVIE: ${JSON.stringify(action.payload)}`);
      if (action.payload.data.success)
        return {
          ...state,
          categoriesList: [
            ...state.categoriesList.map((category: any) =>
              category._id === action.payload.categoryId
                ? {
                    ...category,
                    movies: category.movies.map((movie: Movie) =>
                      movie._id === action.payload.movieId
                        ? action.payload.movie
                        : movie
                    ),
                  }
                : category
            ),
          ],
        };
      else {
        return { ...state };
      }
    case actionTypes.DELETE_MOVIE:
      console.log(action.payload);
      return {
        ...state,
        categoriesList: state.categoriesList.map((category: Category) =>
          category._id === action.payload.categoryId
            ? {
                ...category,
                movies: category.movies?.filter(
                  (movie: Movie) => movie._id !== action.payload.movieId
                ),
              }
            : category
        ),
      };
    default:
      return { ...state };
  }
};

// exports
export default categoriesReducer;
