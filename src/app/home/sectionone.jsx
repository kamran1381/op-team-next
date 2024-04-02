import React from 'react';
import Image from 'next/image';

const Sectionone = () => {
    // Explicit positions for each SVG
    const svgPositions = [
        { left: '-30%', top: '50%' }, // SVG 1 position
        { left: '60%', top: '20%' }, // SVG 2 position
        { left: '120%', top: '73%' }, // SVG 3 position
    ];

    return (
        <>
            <div className='xl:w-1/2 w-full h-fit max-w-7xl flex lg:flex-row flex-col-reverse xl:justify-center justify-around items-center lg:p-2 lg:pb-0 relative '>
                <div className='flex flex-col lg:w-1/3 lg:items-start w-full items-center space-y-3 p-5 z-20'>
                    <span className='w-fit bg-indigo-100 px-5 py-1 rounded-full text-xs font-extrabold text-indigo-950'>به ما اعتماد کنید</span>
                    <p className='text-indigo-950 xl:text-2xl text-xl font-extrabold leading-10 lg:text-right text-center'>ساخت انواع سایت های فروشگاهی،شرکتی،خبری و مقاله ایی،گیمینگ،شخصی و ....</p>
                    <span className='text-xs font-extrabold text-indigo-950'>تیم خوش ذوق در حوزه برنامه نویسی و طراحی سایت</span>
                </div>
                <div className='lg:w-[400px] lg:h-[600px] w-[300px] h-[500px] flex justify-center items-center relative z-20 '>
                    <div className='w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-b from-[#18DBE7] to-[#185CE7] flex justify-center items-center lg:bottom-12 bottom-8 lg:-left-12 relative'>
                        <div className='lg:w-80 lg:h-80 w-64 h-64 rounded-full bg-[#efeff7]'></div>
                    </div>
                    <Image src='/assets/images/sectionOneImg.png' className='object-contain' loading='lazy' fill alt='تصویر' />
                </div>
               
                <div className="absolute inset-0 flex justify-between items-center pointer-events-none z-0 " >
                    {svgPositions.map((position, index) => (
                        <div key={index} className={`absolute animate-spin`} style={{left: position.left, top: position.top}}>
                            <svg width="122" height="121" viewBox="0 0 122 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="60.5" cy="60.5" r="60.5" fill="#ECECFF" />
                                <line x1="72.7071" y1="1.70711" x2="1.70711" y2="72.7071" stroke="#DEE4F1" strokeWidth="2" />
                                <line x1="53.7071" y1="1.70711" x2="0.707104" y2="54.7071" stroke="#DEE4F1" strokeWidth="2" />
                                <line x1="120.707" y1="67.7071" x2="68.7071" y2="119.707" stroke="#DEE4F1" strokeWidth="2" />
                                <line x1="86.7071" y1="6.70711" x2="6.70711" y2="86.7071" stroke="#DEE4F1" strokeWidth="2" />
                                <line x1="115.707" y1="34.7071" x2="34.7071" y2="115.707" stroke="#DEE4F1" strokeWidth="2" />
                                <line x1="119.707" y1="48.7071" x2="48.7071" y2="119.707" stroke="#DEE4F1" strokeWidth="2" />
                                <line x1="97.7071" y1="13.7071" x2="12.7071" y2="98.7071" stroke="#DEE4F1" strokeWidth="2" />
                                <line x1="107.707" y1="22.7071" x2="22.7071" y2="107.707" stroke="#DEE4F1" strokeWidth="2" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Sectionone;
