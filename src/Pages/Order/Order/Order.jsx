import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import order from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenue';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
const Order = () => {
  
    const [tabIndex,setTabIndex]= useState(0)
    const [menue]=useMenu();
    const desserts= menue.filter(item=>item.category ==='dessert')
    const soup= menue.filter(item=>item.category ==='soup')
    const salad= menue.filter(item=>item.category ==='salad')
    const pizza= menue.filter(item=>item.category ==='pizza')
    const drinks= menue.filter(item=>item.category ==='drinks')
  
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
  <OrderTab items={salad}></OrderTab>

  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={desserts}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;