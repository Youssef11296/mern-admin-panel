import {useDispatch} from 'react-redux';
import {addCategory} from '../../../context/actions/categoriesActions';

const AddCategoryHandler = data => {
  const dispatcher = useDispatch ();

  return () => {
    dispatcher (addCategory (data));
  };
};

export {AddCategoryHandler};
