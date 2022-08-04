// modules & hooks
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { MEDIA_QUERIES } from "../../../constants";
import {
  addCategory,
  addMovie,
} from "../../../context/actions/categoriesActions";
import useWindowSize from "../../../hooks/useWindowSize";
// styles
import "../../../styles/AddCategory/AddCategory.scss";

export default function AddMovie({ categoryId }) {
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
      addMovie(categoryId, {
        name: data.movieName,
        describtion: data.movieDescribtion,
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

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}
