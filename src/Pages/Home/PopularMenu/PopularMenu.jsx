/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../../Components/MenuItems/MenuItems";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular');
                setMenu(popularMenu)

            })
    }, [])
    return (
        <section>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items">
            </SectionTitle>

            <section className="grid md:grid-cols-2 gap-10 my-10  ">
                {
                    menu?.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }

            </section>

        </section >
    );
};

export default PopularMenu;