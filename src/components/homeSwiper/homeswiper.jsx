'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperNextButton from './swipernextbutton';
import SwiperPrevButton from './swiperprevbutton';
import Image from 'next/image'



const HomeSwiper = ({ data }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.realIndex);
    };

    return (
        <>
            <Swiper
                slidesPerView={1}
                className='w-full h-full relative bg-slate-100 rounded-2xl z-20'
                modules={[Autoplay]}
                spaceBetween={50}
                navigation
                autoplay={true}
                onSlideChange={handleSlideChange}
            >
                {data.map((item , index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full relative z-20 ">
                            <Image className="object-contain z-20" src='/assets/images/sectionOneImg.png' fill alt="homeswiper" />
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperNextButton />
                <SwiperPrevButton />
            </Swiper>
            <span className="absolute bottom-[7px] right-[7px] pl-5 pr-3 py-2 rounded-[30px_0px_23px_30px] bg-blue-700 text-slate-100 text-xl z-30">{data[currentSlideIndex].name}</span>
        </>
    );
}

export default HomeSwiper;
