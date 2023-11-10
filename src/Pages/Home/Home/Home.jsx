import React from 'react';
import Banner from '../Banner/Banner';
import Categroy from '../Category/Categroy';
import PopularMenu from '../PopularMenue/PopularMenu';
import FeaturedMenue from '../FeaturedMenue/FeaturedMenue';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
                  <Helmet>
        <title>Bistro | Home</title>
        </Helmet>
          <Banner></Banner>
          <Categroy></Categroy>
          <PopularMenu></PopularMenu>

          <FeaturedMenue></FeaturedMenue>

          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;