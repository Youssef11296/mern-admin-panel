// modules & hooks
import { useSelector } from "react-redux";
import { RootState } from "../../../context";
// antd
import { List } from "antd";
// children
import CategoryItem from "./CategoryItem";
// styles
import "../../../styles/Categories/CategoriesList.scss";

const CategoriesList = () => {
  // selectors
  const categoriesList = useSelector(
    (state: RootState) => state.movies.categoriesList
  );

  return (
    <List
      itemLayout="horizontal"
      dataSource={categoriesList}
      className="categories-list container"
      renderItem={(item: Category) => <CategoryItem category={item} />}
    />
  );
};

export default CategoriesList;
