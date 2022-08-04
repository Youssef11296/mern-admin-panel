// modules & hooks
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { MEDIA_QUERIES } from "../../../constants";
import { editMovieInCategory } from "../../../context/actions/moviesActions";
import useWindowSize from "../../../hooks/useWindowSize";
// styles
import "../../../styles/AddCategory/AddCategory.scss";

export default function EditMovie({ categoryId, movieId }) {
  console.log({ id: categoryId });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      movieName: "",
      movieDescribtion: "",
    },
  });

  // dispatcher
  const dispatcher = useDispatch();

  // methods
  const onSubmit = (data) => {
    console.log(data);
    dispatcher(
      editMovieInCategory(categoryId, movieId, {
        name: data.movieName,
        describtion: data.movieDescribtion,
        rate: 0,
      })
    );
    reset();
  };

  // window size
  const windowSize = useWindowSize();

  return (
    <div className="add-category container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${
          windowSize.width && windowSize.width < MEDIA_QUERIES.MD
            ? "responsive-md"
            : ""
        }`}
      >
        <div className="input-field">
          <input
            placeholder="Movie Name"
            {...register("movieName", { required: true })}
          />
          {errors.movieName && <span>Movie name is required</span>}
        </div>

        <div className="input-field">
          <input
            placeholder="Movie Describtion"
            {...register("movieDescribtion", { required: true })}
          />
          {errors.movieDescribtion && (
            <span>Movie describtion is required</span>
          )}
        </div>

        <button type="submit">Edit Movie</button>
      </form>
    </div>
  );
}
