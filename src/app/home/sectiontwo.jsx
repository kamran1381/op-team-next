import React from 'react';
import Image from 'next/image'
import AnimateCircles from '@/components/animatecircles';

const Sectiontwo = () => {
    return (
        <div id='aboutUs' className='bg-slate-100 w-full flex justify-center relative'>
            <div className='w-full max-w-7xl flex flex-col lg:flex-row items-start lg:space-x-20 lg:space-x-reverse py-10 lg:space-y-0 space-y-5 xl:px-0 px-2 z-10'>
                <div className='w-full lg:w-1/3 lg:h-[800px] flex justify-center items-center relative px-2 lg:px-0'>
                    {/* <div className='w-[430px] h-[280px] rounded-3xl bg-gradient-to-b from-[#18DBE7] to-[#185CE7] flex justify-center items-center translate-y-1/2 -top-6 right-6 absolute z-0'>
                        <div className='w-[410px] h-[260px] rounded-2xl bg-slate-100'></div>
                    </div> */}
                    <Image src='/assets/images/sectionTwoImg.png' className='object-contain rounded-md z-10 shadow-md shadow-slate-600' loading='lazy' width={400} height={400} alt='لوگوی او پی تیم' />
                </div>
                <div className='w-full flex flex-col lg:w-2/3 h-full space-y-3 justify-center lg:items-start items-center px-5 lg:px-0 lg:text-right text-center'>
                    <span className='w-fit bg-indigo-100 px-5 py-1 rounded-full text-xs font-extrabold text-indigo-950'>درمورد تیم</span>
                    <p className='text-indigo-950 lg:text-2xl text-xl font-extrabold leading-10 w-full lg:w-1/3 '>تیم برنامه نویسی اوپی،تیم خود کفا در حوزه ساخت و طراحی وب</p>
                    <span className='lg:text-xl text-sm font-extrabold text-slate-400 w-full lg:w-2/3 leading-10'>تیم اوپی تاسیس شده در 1402/10/1 ، این تیم تشکیل شده از چند فریلنسر  که تجربه کافی در حوزه برنامه نویسی  را دارا هستند. یک تیم خوش ذوق و خلاق در زمینه ساخت سایت های شخصی ،شرکتی، فروشگاهی و ... که شعارشان نوآوری و ایده های ناب هست و از مهم ترین حسن های این تیم نظم و مسعولیت پذیری است. حسن انتخاب شما سبب رضایت شما خواهد شد.</span>
                </div>
            </div>
            <div className='absolute top-20 right-1/4'>
                <AnimateCircles />
            </div>
            <div className='absolute top-1/2 left-20'>
                <AnimateCircles />
            </div>
            <div className='absolute bottom-2 right-1/4'>
                <AnimateCircles />
            </div>
        </div>
    );
}

export default Sectiontwo;
