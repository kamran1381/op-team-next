'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const CategorySlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const images = [
        '/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg',
        '/assets/images/weblog header/joshua-aragon-EaB4Ml7C7fE-unsplash.jpg',
        '/assets/images/weblog header/markus-spiske-cvBBO4PzWPg-unsplash.jpg'
    ];

    const handleClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const slider = sliderRef.current;
        slider.addEventListener('click', handleClick);

        return () => {
            slider.removeEventListener('click', handleClick);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); 

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='relative h-[500px]'>
            <div
                
                ref={sliderRef}
                style={{ cursor: 'pointer' }}
            >
                <Image
                    src={images[currentIndex]}
                    className='object-cover rounded-xl'
                    layout='fill'
                    alt='تصویر'
                />
            </div>

            <div className='absolute  bottom-4 right-2 flex flex-col items-start space-x-4'>
                 <div className='lg:w-[400px] lg:h-[300px] relative'>
                 <Image
                    src={images[currentIndex]}
                    className='object-cover rounded-xl'
                    layout='fill'
                    alt='تصویر'
                />
                 </div>
            </div>
        </div>
    );
};

export default CategorySlider;
