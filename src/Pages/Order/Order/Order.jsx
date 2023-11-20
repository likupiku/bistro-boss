import { useState } from "react";
import orderImg from "../../../assets/assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
    const categories = ['Pizza', 'Dessert', 'Soup', 'Salad', 'Drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();

    console.log(category)



    const drinks = menu.filter(item => item.category === "drinks")
    const pizza = menu.filter(item => item.category === "pizza")
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")

    return (
        <div className="mb-20">

            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>

            <Cover
                img={orderImg}
                title={"Order Food"}
                subHeading={"Would you like to try a dish?"}
            ></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Pizza</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;