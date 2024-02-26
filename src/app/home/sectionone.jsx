import React from 'react';
import Image from 'next/image'

const Sectionone = () => {
    return (
        <div className='w-1/2 h-fit max-w-7xl flex justify-center items-center'>
            <div className='flex flex-col w-1/3 space-y-3'>
                <span className='w-fit bg-indigo-100 px-5 py-1 rounded-full text-xs font-extrabold text-indigo-950'>به ما اعتماد کنید</span>
                <p className='text-indigo-950 text-2xl font-extrabold leading-10'>ساخت انواع سایت های فروشگاهی،شرکتی،خبری و مقاله ایی،گیمینگ،شخصی و ....</p>
                <span className='text-xs font-extrabold text-indigo-950'>تیم خوش ذوق در حوزه برنامه نویسی و طراحی سایت</span>
            </div>
            <div className='w-2/3 h-[600px] flex justify-center items-center relative'>
                <div className='w-96 h-96 rounded-full bg-gradient-to-b from-[#18DBE7] to-[#185CE7] flex justify-center items-center bottom-2 left-3 absolute'>
                    <div className='h-80 w-80 rounded-full bg-[#efeff7]'></div>
                </div>
                <Image src='/assets/images/sectionOneImg.png' className='object-contain' loading='lazy' fill  alt='تصویر' />
            </div>
        </div>
    );
}

export default Sectionone;
