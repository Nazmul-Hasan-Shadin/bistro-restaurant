import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import order from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenue';
import FoodCard from '../../../Components/FoodCard/FoodCard';
const Order = () => {
  
    const [tabIndex,setTabIndex]= useState(0)
    const [menue]=useMenu();
    const desserts= menue.filter(item=>item.category ==='dessert')
    const soup= menue.filter(item=>item.category ==='soup')
    const salad= menue.filter(item=>item.category ==='salad')
    const pizza= menue.filter(item=>item.category ==='pizza')
    const offered= menue.filter(item=>item.category ==='offered')
  
    console.log(tabIndex);
    return (
        <div>
            <Cover img={order} title={"Order Food"}></Cover>

    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Desserts</Tab>
    <Tab>Drinks</Tab>
   
  </TabList>
  <TabPanel>
  <div className='grid md:grid-cols-3 gap-10 '>
  {
        salad.map(item=><FoodCard key={item._id}
         item={item}
        ></FoodCard>)
    }
  </div>
  </TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
        </div>
    );
};

export default Order;