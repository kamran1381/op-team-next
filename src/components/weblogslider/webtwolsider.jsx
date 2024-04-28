'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Webtwoslider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg',
        '/assets/images/weblog header/joshua-aragon-EaB4Ml7C7fE-unsplash.jpg',
        '/assets/images/weblog header/markus-spiske-cvBBO4PzWPg-unsplash.jpg'
    ];

    const handleClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 70000); // Change image every 10 seconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='relative h-full' onClick={handleClick} style={{ cursor: 'pointer' }}>
            <Image
                src={images[currentIndex]}
                className='object-cover rounded-md'
                layout='fill'
                alt='تصویر'
            />
             <div className='absolute  bottom-0 right-0 flex flex-col items-start space-x-4'>
                <div className='pr-3'>
                    <button type="button" className="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2"> بک اند  </button>
                    <button type="button" className="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-xl text-sm px-4 py-2.5 text-center me-2 mb-2">فرانت اند</button>
                </div>
                <div className='backdrop-blur-sm  rounded-xl w-full pl-20 py-3 '>
                    <span className='text-white lg:text-md flex pr-3'>برنامه نویسی وب برنامه نویسی وب</span>
                </div>
            </div>
        </div>
    );
};

export default Webtwoslider;
