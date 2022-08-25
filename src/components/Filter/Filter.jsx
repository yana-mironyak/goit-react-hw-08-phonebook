import css from '../Filter/Filter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const changeFilter = (evt) => {
    dispatch(setFilter(evt.currentTarget.value))
  };
  
  return <label className={css.filterName} htmlFor='text'>
      Find contacts by name
      <input autoComplete='off' className={css.filter} type='text' value={filter} name='filter' onChange={changeFilter} />
    </label>
}

export default Filter;


