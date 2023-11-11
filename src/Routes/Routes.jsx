import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menue/Menu";
import Order from "../Pages/Order/Order/Order";

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
          path: 'order',
          element: <Order></Order>
        },
        
      ]
    },
  ]);
  