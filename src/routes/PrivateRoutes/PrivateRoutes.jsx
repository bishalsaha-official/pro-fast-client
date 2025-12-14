import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <span>loading</span>
    }
    if (!user) {
        <Navigate to='/login'></Navigate>
    }
    return children
};

export default PrivateRoutes;