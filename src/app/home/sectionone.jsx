import React from 'react';
import Image from 'next/image'

const Sectionone = () => {
    return (
        <div className='xl:w-1/2 w-full h-fit max-w-7xl flex lg:flex-row flex-col-reverse xl:justify-center justify-around items-center lg:p-2 lg:pb-0'>
            <div className='flex flex-col lg:w-1/3 lg:items-start w-full items-center space-y-3 p-5 '>
                <span className='w-fit bg-indigo-100 px-5 py-1 rounded-full text-xs font-extrabold text-indigo-950'>به ما اعتماد کنید</span>
                <p className='text-indigo-950 xl:text-2xl text-xl font-extrabold leading-10 lg:text-right text-center'>ساخت انواع سایت های فروشگاهی،شرکتی،خبری و مقاله ایی،گیمینگ،شخصی و ....</p>
                <span className='text-xs font-extrabold text-indigo-950'>تیم خوش ذوق در حوزه برنامه نویسی و طراحی سایت</span>
            </div>
            <div className='lg:w-[400px] lg:h-[600px] w-[300px] h-[500px] flex justify-center items-center relative'>
                <div className='w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-b from-[#18DBE7] to-[#185CE7] flex justify-center items-center lg:bottom-12 bottom-8 lg:-left-12 absolute'>
                    <div className='lg:w-80 lg:h-80 w-64 h-64 rounded-full bg-[#efeff7]'></div>
                </div>
                <Image src='/assets/images/sectionOneImg.png' className='object-contain' loading='lazy' fill  alt='تصویر' />
            </div>
        </div>
    );
}

export default Sectionone;
