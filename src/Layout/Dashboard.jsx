import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex '>
            {/* Dasboard side bar */}
           <div className="w-64 min-h-screen bg-orange-400">
             
             <ul className="menu p-4">
               
                <li> <NavLink to={"/dashboard/userHome"}>
               <FaHome></FaHome>
                    User Home </NavLink> </li>

                    <li> <NavLink to={"/dashboard/reservation"}>

                  <FaCalendar></FaCalendar>
                    ReserVation </NavLink> </li>

                
          
                    <li> <NavLink to={"/dashboard/cart"}>
                 <FaAd></FaAd>
                    My Cart </NavLink> </li> 


                    <li> <NavLink to={"/dashboard/bookings"}>
                 <FaList></FaList>
                    My Bookings </NavLink> </li> 

         <div className="divider"></div>

         <li> <NavLink to={"/dashboard/bookings"}>
                 <FaList></FaList>
                    Home </NavLink> </li> 

                    <li> <NavLink to={"/dashboard/bookings"}>
                 <FaList></FaList>
                    Menu </NavLink> </li>                


             </ul>
            
            </div> 

            {/* Dashboard content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;