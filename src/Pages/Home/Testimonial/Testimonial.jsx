import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import './Testimonial.css'

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    console.log('reviews', reviews)
    return (
        <section className="my-20">
            <SectionTitle
                heading={"Testimonials"}
                subHeading={"What Our Clients Say"}
            >
            </SectionTitle>
            <section className="w-full h-[500px] mt-10">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews?.map(review => <SwiperSlide key={review._id}>
                            <div className="w-1/2 mx-auto glow text-center my-20  font-semibold p-5 space-y-5 rounded-xl border-blue-700">
                                <Rating
                                    className=""
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <h1 className="text-2xl font-bold text-green-700">{review.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>

            </section>

        </section>
    );
};

export default Testimonial;