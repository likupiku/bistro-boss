/* eslint-disable react/jsx-no-undef */
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../../Components/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")

    return (
        <section>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items">
            </SectionTitle>

            <section className="grid md:grid-cols-2 gap-10 my-10  ">
                {
                    popular?.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }

            </section>

        </section >
    );
};

export default PopularMenu;