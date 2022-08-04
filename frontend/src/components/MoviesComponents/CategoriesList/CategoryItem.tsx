// antd
import { List } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import MovieItem from "./MovieItem";
import { useState } from "react";
import AddMovie from "./AddMovie";

// props
interface Props {
  category: Category;
}

const CategoryItem: React.FC<Props> = ({ category }) => {
  // states
  const [isExpanded, setIsExpanded] = useState(false);

  // toggle movies
  const toggleMovies = () => setIsExpanded((ps) => !ps);

  return (
    <List.Item className="category-item">
      <div className="category-heading">
        <MenuOutlined onClick={toggleMovies} />
        <h4>{category.name}</h4>
      </div>
      {isExpanded ? (
        <>
          <AddMovie categoryId={category._id} />
          <List
            itemLayout="horizontal"
            dataSource={category.movies}
            className="movies-list"
            renderItem={(item: Movie) => (
              <MovieItem categoryId={category._id} movie={item} />
            )}
          />
        </>
      ) : null}
    </List.Item>
  );
};

export default CategoryItem;
