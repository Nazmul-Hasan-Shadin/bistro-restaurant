import React from 'react';
import MenueItem from '../../Shared/MenuItem/MenueItem';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img}) => {
    console.log(items);
    return (
        <div className='pt-8'>
               { title && <Cover img={img}
         title={title}
       ></Cover>}
               <SectionTitle subHeading={'Dont miss '} headding={'Todays Offer'} >  </SectionTitle>
                <div className='grid md:grid-cols-2 gap-10 my-16'> 
        {
            items?.map(item=><MenueItem key={item._id}  item={item} ></MenueItem>  )
        }
     </div>
  <Link to={`/order/${title}`}>     <button className="btn btn-outline border-0 border-b-4 mt-4" >Order Now</button>
  </Link>
        </div>
    );
};

export default MenuCategory;