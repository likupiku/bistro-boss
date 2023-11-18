/* eslint-disable react/prop-types */
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

        </div>
    );
};

export default MenuCategory;