// modules & hooks
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { MEDIA_QUERIES } from "../../../constants";
import { addCategory } from "../../../context/actions/categoriesActions";
import useWindowSize from "../../../hooks/useWindowSize";
// styles
import "../../../styles/AddCategory/AddCategory.scss";

export default function AddCategory() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      categoryName: "",
      categoryDescribtion: "",
    },
  });

  // dispatcher
  const dispatcher = useDispatch();

  // methods
  const onSubmit = (data) => {
    console.log(data);
    dispatcher(
      addCategory({
        name: data.categoryName,
        describtion: data.categoryDescribtion,
        movies: [],
      })
    );
    reset();
  };

  // window size
  const windowSize = useWindowSize();

  return (
    <div className="add-category container">
      <h2>Add Category</h2>
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
            placeholder="Category Name"
            {...register("categoryName", { required: true })}
          />
          {errors.categoryName && <span>Category name is required</span>}
        </div>

        <div className="input-field">
          <input
            placeholder="Category Describtion"
            {...register("categoryDescribtion", { required: true })}
          />
          {errors.categoryDescribtion && (
            <span>Category describtion is required</span>
          )}
        </div>

        <button type="submit">Create Category</button>
      </form>
    </div>
  );
}
