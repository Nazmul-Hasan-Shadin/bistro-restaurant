import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenueItem from '../../Shared/MenuItem/MenueItem';

const PopularMenu = () => {
    const [menue,setMenue]= useState([])
    useEffect(()=>{
        fetch('menue.json')
        .then(res=>res.json())
        .then(data=> {
            const popularItems=data.filter(item=> item.category=== 'popular' );
            setMenue(popularItems)
        } )
    },[])

    return (
        <section className='mb-12'>
        <SectionTitle
         headding={"From Our Menue"}
         subHeading={"Popular Items"}
        ></SectionTitle>

     <div className='grid md:grid-cols-2 gap-10 '> 
        {
            menue.map(item=><MenueItem key={item._id}  item={item} ></MenueItem>  )
        }
     </div>

  

        </section>
    );
};

export default PopularMenu;