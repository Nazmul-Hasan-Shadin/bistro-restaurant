import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menue/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: 'menue',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<Signup></Signup>
        },
        {
          path: 'secret',
          element: <PrivateRoutes> <Secret></Secret> </PrivateRoutes>
        }
        
      ]
    },
 
  {
    path: 'dashboard',
    element: <PrivateRoutes> <Dashboard></Dashboard> </PrivateRoutes>,
    children:[
      {
      path:'cart',
      element: <Cart></Cart>,
      },
  //  admin only routes
      {
        path: 'addItems',
        element: <AdminRoutes> <AddItems></AddItems></AdminRoutes>
      },
     {
      path:'manageItems',
      element: <AdminRoutes> <ManageItems></ManageItems> </AdminRoutes>

     },
      {
        path:'users',
        element: <AllUsers></AllUsers>
      }


    ]
  }
     
  ]);
  