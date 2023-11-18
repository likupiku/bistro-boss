import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/assets/menu/banner3.jpg'
import pizzaImg from '../../../assets/assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered")
    const pizza = menu.filter(item => item.category === "pizza")
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")




    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover img={coverImg}
                title={"OUR MENU"}
                subHeading={"Would you like to try a dish?"}
            ></Cover>
            <SectionTitle heading={"Todays Offer"} subHeading={"Dont Miss"}></SectionTitle>
            {/* offered item */}
            <MenuCategory items={offered}></MenuCategory>
            {/* pizza item */}
            <MenuCategory items={pizza}
                title={'Pizza'}
                coverImg={pizzaImg}
            ></MenuCategory>
            {/* dessert item */}
            <MenuCategory
                items={dessert}
                title={"Dessert"}
                coverImg={dessertImg}
            ></MenuCategory>
            {/* soup item */}
            <MenuCategory
                items={soup}
                title={"Soup"}
                coverImg={soupImg}
            ></MenuCategory>
            {/* salad item */}
            <MenuCategory
                items={salad}
                title={"Salad"}
                coverImg={saladImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;