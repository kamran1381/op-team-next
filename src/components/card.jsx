import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";


const Card = () => {
    return (
        <div className='w-72 h-[452px] bg-blue-700 rounded-3xl p-5 flex flex-col space-y-6'>
            <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col space-y-2'>
                    <span className='text-2xl font-extrabold text-white'>رضا عسگری</span>
                    <span className='text-xs font-bold text-white'>طراح و مدیر تیم</span>
                    <span className='w-7 h-1 bg-white rounded-full'></span>
                </div>
                <div className='w-20 h-20 bg-white rounded-2xl'></div>
            </div>
            <p className='font-bold text-white leading-8 text-justify'>طراح UiUx هستم،22ساله از قم،
                دارای دوسال سابقه کاری فریلنسری،
                جویای پیشرفت هستم و با ایجاد این تیم قله های پیشرفت را فتح خواهم کرد.
            </p>
            <div className='w-8 h-fit bg-[#0000003c] rounded-full flex flex-col items-center py-3 space-y-5'>
                <PiInstagramLogoFill className='text-xl text-white'/>
                <FaLinkedinIn className='text-xl text-white'/>
            </div>
            <div className='w-full justify-between items-center'>
                <button className='bg-white'>رزومه</button>
            </div>
        </div>
    );
}

export default Card;
