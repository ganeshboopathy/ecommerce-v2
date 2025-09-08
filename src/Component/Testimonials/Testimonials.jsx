import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Satya Nadella",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Virat Kohli",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "Sachin Tendulkar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 6,
        name: "Ganesh",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
    }
];

const Testimonials = () => {
    return (
        <div className='pt-16 dark:bg-gray-900'>
            <div className='flex justify-center'>
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-primary text-sm font-bold'>
                        What our customers are saying
                    </p>
                    <h1 data-aos="fade-up" className='text-black font-bold text-4xl dark:text-white'>
                        Testimonials
                    </h1>
                    <p className='text-xs text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
                    </p>
                </div>
            </div>

            {/* Swiper card */}
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 2000,              // autoplaySpeed: 2000
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,  // pauseOnHover
                }}
                speed={500}                 // speed: 500
                loop={true}                 // infinite: true
                pagination={{ clickable: true }} // dots: true
                navigation={false}          // arrows: false
                modules={[Autoplay, Pagination, Navigation]}
                className="rounded-2xl"
                breakpoints={{
                    10000: {
                        slidesPerView: 3,       // slidesToShow: 3
                        slidesPerGroup: 1,      // slidesToScroll: 1
                    },
                    1024: {
                        slidesPerView: 3,       // slidesToShow: 2
                        slidesPerGroup: 1,
                        initialSlide: 2,        // initialSlide: 2
                    },
                    640: {
                        slidesPerView: 2,       // slidesToShow: 1
                        slidesPerGroup: 1,
                    },
                }}
            >
                {TestimonialData.map((data) => (
                    <SwiperSlide key={data.id}>
                        <div className="my-6">
                            <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                <div className="mb-4">
                                    <img
                                        src={data.img}
                                        alt={data.name}
                                        className="rounded-full w-20 h-20"
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="space-y-3">
                                        <p className="text-xs text-gray-500">{data.text}</p>
                                        <h1 className="text-xl font-bold text-black/80 dark:text-light">
                                            {data.name}
                                        </h1>
                                    </div>
                                </div>
                                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                    ,,
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Testimonials
