import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { useSwiper } from 'swiper/react';

const SwiperPrevButton = () => {

    const swiper = useSwiper();

    return (
        <div className="absolute right-5 top-1/2 z-10 -translate-y-1/2">
            <button className="w-10 h-10 bg-blue-700 rounded-full text-slate-100 flex justify-center items-center" onClick={() => swiper.slidePrev()}>
                <FaChevronRight size={30} />
            </button>
        </div>
    );
}

export default SwiperPrevButton;
