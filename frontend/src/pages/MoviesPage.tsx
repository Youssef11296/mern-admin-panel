// children
import { AddCategory, CategoriesList } from "../components/MoviesComponents";

const MoviesPage: React.FC = () => {
  return (
    <div className="categories">
      <AddCategory />
      <CategoriesList />
    </div>
  );
};

export default MoviesPage;
