/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItems from "../../../Components/MenuItems/MenuItems";
import Cover from "../Cover/Cover";


// eslint-disable-next-line no-unused-vars
const MenuCategory = ({ items, coverImg, title }) => {
    return (
        <div className="py-10 ">
            {title && <Cover img={coverImg}
                title={title}
            ></Cover>}
            <section className="grid md:grid-cols-2 gap-10 my-10  ">
                {
                    items?.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }

            </section>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className='btn text-3xl btn-outline  border-0 border-b-4 border-green-800 text-gray-700 hover:bg-green-600 hover:border-black '> Order Your Favorite Food</button>
                </Link>

            </div>


        </div>
    );
};

export default MenuCategory;