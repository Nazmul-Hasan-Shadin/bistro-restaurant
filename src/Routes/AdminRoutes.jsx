import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const AdminRoutes = ({children}) => {
    const {user,loading}= useContext(AuthContext)
 const [isAdmin,isAdminLoading]= useAdmin()
 const location= useLocation();
    if (loading || isAdminLoading) {
        return <progress className='progress w-56'></progress>
    }
    if (user && isAdmin) {
        return children
    }
    return  <Navigate state={{form:location }} replace to={'/login'}></Navigate>


};

export default AdminRoutes;