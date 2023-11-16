/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './MenuItems.css'

const MenuItems = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div className='md:flex gap-5 border-4 p-5 rounded-xl border-green-300'>
            <img className='clippath w-[150px]' src={image} alt="" />
            <div>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p className='font-semibold'>{recipe}</p>
            </div>
            <div>
                <p className='text-3xl font-bold text-green-700'>${price}</p>
            </div>

        </div>
    );
};

export default MenuItems;