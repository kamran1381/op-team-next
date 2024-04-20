'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Weblogslider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg',
        '/assets/images/weblog header/joshua-aragon-EaB4Ml7C7fE-unsplash.jpg',
        '/assets/images/weblog header/markus-spiske-cvBBO4PzWPg-unsplash.jpg'
    ];

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='relative h-[400px]'>
            <Image
                src={images[currentIndex]}
                className='object-cover rounded-md'
                layout='fill'
                alt='تصویر'
            />
            <div className='absolute bottom-2 right-2 flex flex-col items-center space-x-4'>
               
                <div className='flex flex-row'>
                <button type="button" class="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">بک اند </button>

                    <button type="button" class="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">فرانت اند</button>

                </div>

                <div>
                    <p className='text-white'>برنامه نویسی وب برنامه نویسی وب</p>
                </div>
                 
               
            </div>
            <div className='absolute top-1/2 left-2 transform -translate-y-1/2 z-10'>
                <button onClick={handleLeftClick} className='text-white'>چپ</button>
            </div>
            <div className='absolute top-1/2 right-2 transform -translate-y-1/2 z-10'>
                <button onClick={handleRightClick} className='text-white'>راست</button>
            </div>
        </div>
    );
};

export default Weblogslider;
