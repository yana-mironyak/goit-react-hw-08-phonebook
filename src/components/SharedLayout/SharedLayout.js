import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AuthNav from "components/auth/authNav";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";

const SharedLayout = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <>
            <nav>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}   
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>    
        </>  
    )
}

export default SharedLayout;