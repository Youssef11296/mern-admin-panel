// modules
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MEDIA_QUERIES } from "./constants";
// context & utils
import { RootState } from "./context";
import { getAllCategories } from "./context/actions/categoriesActions";
import useWindowSize from "./hooks/useWindowSize";
// children
import MoviesPage from "./pages/MoviesPage";

const App = () => {
  // selectors
  const categoriesList = useSelector((state) => state.movies.categoriesList);

  // dispatcher
  const dispatcher = useDispatch();

  // getting movies
  useEffect(() => {
    dispatcher(getAllCategories());
  }, [dispatcher]);

  // printing
  console.log(categoriesList);

  // window size
  const window = useWindowSize();

  return (
    <div
      className={`app ${
        window.width > MEDIA_QUERIES.LG ? "responsive-md" : null
      }`}
    >
      <MoviesPage categoriesList={categoriesList} />
    </div>
  );
};

export default App;
