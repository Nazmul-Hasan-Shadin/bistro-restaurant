
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menueImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaa from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenue';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
   const [menue]= useMenu();
   console.log(menue,'fkdkld');
  const desserts= menue.filter(item=>item.category ==='dessert')
  const soup= menue.filter(item=>item.category ==='soup')
  const salad= menue.filter(item=>item.category ==='salad')
  const pizza= menue.filter(item=>item.category ==='pizza')
  const offered= menue.filter(item=>item.category ==='offered')

    return (
        <div className=''>
        <Helmet>
        <title>Bistro | Menue</title>
        </Helmet>
        {/* main cover */}
       <Cover img={menueImg}
         title={'Our Menue'}
       ></Cover>
       <SectionTitle subHeading={'Dont miss '} headding={'Todays Offer'} >  </SectionTitle>
       {/* offered menu items */}
       <MenuCategory items={offered}></MenuCategory>
       {/* desert menue items */}
       <MenuCategory img={dessertImg} items={desserts} title={"dessert"}></MenuCategory>


       <MenuCategory img={pizzaa} items={pizza} title={"pizza"}></MenuCategory>
       <MenuCategory img={saladImg} items={salad} title={"salad"}></MenuCategory>
       <MenuCategory img={soupImg} items={soup} title={"soup"}></MenuCategory>
     
        </div>
    );
};

export default Menu;