import css from '../UserMenu/UserMenu.module.css';
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import authOperations from 'redux/auth/authOperations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return (
        <div className={css.user}>
            <p className={css.user__name}>Hi, {name}</p>
            <button className={css.logout__btn} type='button' onClick={() => dispatch(authOperations.logOut())}>
                Logout
            </button>
        </div>
    ) 
};

export default UserMenu;