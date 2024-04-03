import React from 'react';
import Image from 'next/image';
import AnimateCircles from '@/components/animatecircles';
const Sectionone = () => {


    return (
        <>
            <div className='w-full h-fit max-w-7xl flex lg:flex-row flex-col-reverse xl:justify-center justify-around items-center lg:p-2 lg:pb-0 mt-32 relative'>
                <div className='flex flex-col lg:w-1/3 lg:items-start w-full items-center space-y-3 p-5 z-20'>
                    <span className='w-fit bg-[#EFEFF7] px-5 py-1 rounded-full text-xs font-extrabold text-[#00164E]'>به ما اعتماد کنید</span>
                    <p className=' md:text-2xl text-xl font-extrabold leading-10 lg:text-right text-center text-[#00004E]'>ساخت انواع سایت های فروشگاهی،شرکتی،خبری و مقاله ایی،گیمینگ،شخصی و ....</p>
                    <span className='text-xs font-extrabold text-[#00004E]'>تیم خوش ذوق در حوزه برنامه نویسی و طراحی سایت</span>
                </div>
                <div className='lg:w-[400px] lg:h-[600px] w-[300px] h-[500px] flex justify-center items-center relative z-20 '>
                    <div className='w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-b from-[#18DBE7] to-[#185CE7] flex justify-center items-center lg:-bottom-24 bottom-1 lg:-left-24 relative'>
                        <div className='lg:w-[330px] lg:h-[330px] w-64 h-64 rounded-full bg-[#efeff7]'></div>
                    </div>
                    <Image src='/assets/images/sectionOneImg.png' className='object-contain' loading='lazy' fill alt='تصویر' />
                </div>
                <div className='absolute top-1/3 right-1/3 '>
                    <AnimateCircles color={"#ECECFF"} />
                </div>
                <div className='absolute top-1/2 left-0'>
                    <AnimateCircles color={"#ECECFF"} />
                </div>
                <div className='absolute bottom-2 right-0'>
                    <AnimateCircles color={"#ECECFF"} />
                </div>
            </div>
        </>
    );
}

export default Sectionone;
