import css from '../auth/authNav.module.css';
const { NavLink } = require("react-router-dom");

const AuthNav = () => {
    return (
        <div className={css.header}>
            <NavLink className={css.header__nav}
                to='/register'
            >Register</NavLink>
            <NavLink className={css.header__nav}
                to='/login'
            >LogIn</NavLink>
            <div id="indicator"></div>
        </div>
    )
};

export default AuthNav;