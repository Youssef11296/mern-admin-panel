// antd
import { Button, List } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
// redux context
import { deleteMovieFromCategory } from "../../../context/actions/moviesActions";
import EditMovie from "./EditMovie";
import { useState } from "react";

const MovieItem = ({ categoryId, movie }) => {
  // dispatcher
  const dispatcher = useDispatch();

  // methods
  const deleteMovieHandler = (categoryId, movieId) => {
    console.log(`Delete: ${categoryId} - ${movieId}`);
    dispatcher(deleteMovieFromCategory(categoryId, movieId));
  };

  const editMovieHandler = (categoryId, movieId) => {
    console.log(`Edit: ${categoryId} - ${movieId}`);
    // dispatcher(deleteMovieFromCategory(categoryId, movieId));
  };

  // local states
  const [isExpanded, setIsExpanded] = useState(false);

  // toggle edit movie
  const editMovieToggler = () => setIsExpanded((ps) => !ps);

  return (
    <>
      <List.Item className="movie-item">
        <>
          <MenuOutlined onClick={editMovieToggler} />
          <h4>{movie.name}</h4>
        </>
        <div className="movie-controllers">
          <Button onClick={() => editMovieHandler(categoryId, movie._id)}>
            Edit
          </Button>
          <Button onClick={() => deleteMovieHandler(categoryId, movie._id)}>
            Delete
          </Button>
        </div>
      </List.Item>
      {isExpanded ? (
        <EditMovie categoryId={categoryId} movieId={movie._id} />
      ) : null}
    </>
  );
};

export default MovieItem;
