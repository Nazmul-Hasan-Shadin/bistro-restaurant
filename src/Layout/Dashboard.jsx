import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils, FaVoicemail } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart]=useCart();
    // TODO: get isAdmin value from the database
    const [isAdmin]=useAdmin();

    return (
        <div className='flex '>
            {/* Dasboard side bar */}
           <div className="w-64 min-h-screen bg-orange-400">
             
             <ul className="menu p-4">


                {
                    isAdmin ? <>
                        
                <li> <NavLink to={"/dashboard/adminHome"}>
               <FaHome></FaHome>
                    Admin Home </NavLink> </li>

                    <li> <NavLink to={"/dashboard/addItems"}>

                  <FaUtensils></FaUtensils>
                    Add Ttems </NavLink> </li>

                
          
                    <li> <NavLink to={"/dashboard/manageItems"}>
               <FaList></FaList>
                    Manage Items </NavLink> </li> 


                    <li> <NavLink to={"/dashboard/bookings"}>
                 <FaBook></FaBook>
                    Manage Bookings </NavLink> </li> 

                    <li> <NavLink to={"/dashboard/users"}>  

                     <FaUsers></FaUsers>
                    All Users </NavLink> </li> 
                    </>
               
                    
                 
                    
                    :
                    <>
                      <li> <NavLink to={"/"}>
                 <FaHome></FaHome>
                    Home </NavLink> </li> 

                    <li> <NavLink to={"/order/salad"}>
                 <FaList></FaList>
                    Menu </NavLink> </li>        

                    
                    <li> <NavLink to={"/order/contact"}>
                       <FaEnvelope></FaEnvelope>
               
                    Contact </NavLink> 
                    </li>          
                    
                    </>
                }
           


           {/* shared Navlink */}
         <div className="divider"></div>

       


             </ul>
            
            </div> 

            {/* Dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;