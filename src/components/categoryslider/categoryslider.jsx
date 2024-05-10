'use client'
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';

const CategorySlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    // useMemo to ensure images are only initialized once
    const images = useMemo(() => [
        '/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg',
        '/assets/images/weblog header/joshua-aragon-EaB4Ml7C7fE-unsplash.jpg',
        '/assets/images/weblog header/markus-spiske-cvBBO4PzWPg-unsplash.jpg'
    ], []);

    const handleClick = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, [images.length]); // Only depend on images.length, which is a stable value

    useEffect(() => {
        const slider = sliderRef.current;
        slider.addEventListener('click', handleClick);

        return () => {
            slider.removeEventListener('click', handleClick);
        };
    }, [handleClick]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]); // Only depend on images.length, as images array itself is stable

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

            <div className='absolute bottom-5 right-10 flex flex-col items-start space-x-4'>
                <div className='lg:w-[500px] lg:h-[300px] relative bg-white rounded-2xl'>
                    <div className='px-3 py-6'>
                        <button className="bg-[#0045CE] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <span className='text-sm'>طراحی UiUx</span>
                        </button>
                    </div>
                   
                    <div className='text-center font-bold'>
                        <span className='text-2xl text-[#072B82]'>مشکل در بخش زبان فارسی فیگما</span>
                        <p className='pt-3 text-xs text-[#A6A6A6]'>مشکل در بخش زبان فارسی فیگما زمان مطالعه: 10 دقیقه</p>
                        <div className='mt-10 flex flex-col text-sm'>
                            <span>برخی از مشکلات فیگما را با هم مطالعه خواهیم کرد.... </span>
                            <span>برخی از مشکلات فیگما را با هم مطالعه خواهیم کرد.... </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySlider;
