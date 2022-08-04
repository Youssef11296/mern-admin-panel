import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  AnyAction,
} from "redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import moviesReducer from "./reducers/categoriesReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;

export const store = createStore(rootReducer, applyMiddleware(compose(thunk)));
export type RootState = ReturnType<typeof rootReducer>;
