import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import authSelectors from "redux/auth/authSelectors"

export default function PublicRoute({ children, path }) {
    const token = useSelector(authSelectors.getToken);

    return (
       !token ? children : <Navigate to={path} />
    )
}