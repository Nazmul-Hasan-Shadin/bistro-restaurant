import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menueImg from '../../assets/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenue/PopularMenu';
import { Parallax } from 'react-parallax';
const Menu = () => {
    return (
        <div>
        <Helmet>
        <title>Bistro | Menue</title>
        </Helmet>
       <Cover img={menueImg}
         title={'Our Menue'}
       ></Cover>

        <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;