/* eslint-disable react/prop-types */
import './FoodCard.css'
import Tilt from 'react-parallax-tilt';


const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item

    return (
        <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
            <div className="card w-96 bg-black  shadow-xl text-white">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <p className='absolute right-0 mr-5 top-10 px-5 py-2 rounded-xl bg-green-700 font-bold'>${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-green-700">{name}</h2>
                    <p className=''>{recipe}</p>
                    <div className="card-actions">
                        <button className="bn30">Add To Cart</button>
                    </div>
                </div>
            </div>
        </Tilt>

    );
};

export default FoodCard;