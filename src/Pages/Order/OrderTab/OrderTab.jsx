/* eslint-disable react/prop-types */
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { split } from "postcss/lib/list";


const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div >


            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid md:grid-cols-3 gap-5">
                        {items?.slice(0, 5).map(item => <FoodCard
                            key={item._id}
                            item={item}
                        ></FoodCard>)}

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid md:grid-cols-3 gap-5">
                        {items?.slice(6, 10).map(item => <FoodCard
                            key={item._id}
                            item={item}
                        ></FoodCard>)}

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OrderTab;