'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperNextButton from './swipernextbutton';
import SwiperPrevButton from './swiperprevbutton';
import Image from 'next/image'



const HomeSwiper = ({ data }) => {
    const swiperData = data;
    return (
        <>
            <Swiper
                slidesPerView={1}
                className='w-full h-full relative bg-slate-100 rounded-2xl'
                modules={[Autoplay]}
                spaceBetween={50}
                navigation
                autoplay={true}
            >
                {swiperData.map((item) => (
                    <SwiperSlide key={item.name}>
                        <div className="w-full h-full relative">
                            <Image className="object-contain" src='/assets/images/sectionOneImg.png' fill />
                            <span className="absolute bottom-0 right-0 pl-5 pr-3 py-2 rounded-l-full bg-blue-700 text-slate-100 text-xl z-20">{item.name}</span>
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperNextButton />
                <SwiperPrevButton />
            </Swiper>
        </>
    );
}

export default HomeSwiper;
