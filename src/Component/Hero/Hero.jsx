import React from 'react'
import img1 from '../../assets/hero/sale.png'
import img2 from '../../assets/hero/shopping.png'
import img3 from '../../assets/hero/women.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageList = [
    {
        id: 1,
        img: img1,
        title: "Upto 50% off on all Men's Wear",
        description:
            "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        img: img2,
        title: "30% off on all Women's Wear",
        description:
            "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        img: img3,
        title: "70% off on all Products Sale",
        description:
            "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const Hero = () => {
    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px]  bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            {/* Background pattern */}
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-9 dark:bg-primary/95'>
            </div >
            {/* Hero pattern */}
            <div className='container pb-8 sm:pb-0 relative z-10'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="rounded-2xl"
                >
                    {ImageList.map((items) => (
                        <SwiperSlide key={items.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/* text section */}
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left  sm:order-1 ">
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                        {items.title}
                                    </h1>
                                    <p className="text-sm">{items.description}</p>
                                    <div>
                                        <button
                                            className="bg-gradient-to-r from-primary to-secondary hover:scale-105
                                  duration-200 text-white py-2 px-4 rounded-full"
                                        >
                                            Order now
                                        </button>
                                    </div>
                                </div>

                                {/* image section */}
                                <div>
                                    <img
                                        src={items.img}
                                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto relative z-10"
                                        alt={items.title}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Hero