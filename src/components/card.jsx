import React from 'react';
import { FaLinkedinIn, FaStar } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";


const Card = () => {
    return (
        <div className='w-72 h-[452px] bg-blue-700 rounded-3xl p-5 flex flex-col justify-between overflow-hidden relative'>
            <div className='absolute w-full h-full top-0 right-0 z-0'>
                <div className='absolute w-36 h-36 rounded-3xl bg-blue-600 border border-blue-500 left-0 top-10 rotate-45 z-10'></div>
                <div className='absolute w-36 h-36 rounded-3xl bg-blue-600 border border-blue-500 shadow left-8 top-1/2 -translate-y-1/2 rotate-45 z-20'></div>
                <div className='absolute w-36 h-36 rounded-3xl bg-blue-600 border border-blue-500 left-0 bottom-10 rotate-45 z-10'></div>
            </div>
            <div className='w-full flex items-center justify-between z-10'>
                <div className='flex flex-col space-y-2'>
                    <span className='text-2xl font-extrabold text-white'>رضا عسگری</span>
                    <span className='text-xs font-bold text-white'>طراح و مدیر تیم</span>
                    <span className='w-7 h-1 bg-white rounded-full'></span>
                </div>
                <div className='w-20 h-20 bg-white rounded-2xl'></div>
            </div>
            <p className='font-bold text-white leading-8 text-justify z-10'>طراح UiUx هستم،22ساله از قم،
                دارای دوسال سابقه کاری فریلنسری،
                جویای پیشرفت هستم و با ایجاد این تیم قله های پیشرفت را فتح خواهم کرد.
            </p>
            <div className='w-8 h-fit bg-[#0000003c] rounded-full flex flex-col items-center py-3 space-y-5 z-10'>
                <PiInstagramLogoFill className='text-xl text-white hover:text-gray-400 transition-colors' />
                <FaLinkedinIn className='text-xl text-white hover:text-gray-400 transition-colors' />
            </div>
            <div className='w-full flex justify-between self-end items-center z-10'>
                <div className='flex items-center space-x-1 space-x-reverse text-yellow-500'>
                    <FaStar />
                    <FaStar />
                </div>
                <button className='w-1/3 py-1 bg-white rounded-2xl shadow shadow-gray-600 outline-none'>رزومه</button>
            </div>
        </div>
    );
}

export default Card;
