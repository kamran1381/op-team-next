import React from 'react';
import Image from 'next/image';
import AnimateCircles from '@/components/animatecircles';

const Sectiontwo = () => {
    return (
        <div id='aboutUs' className='bg-slate-100 w-full flex justify-center relative'>

            <div className='w-full max-w-7xl flex flex-col lg:flex-row items-start lg:space-x-5 lg:space-x-reverse py-10 lg:space-y-0 space-y-5 xl:px-0 px-2 z-10'>
                <div className='w-full lg:w-1/2 lg:h-[800px] flex lg:justify-start justify-center items-start lg:mr-8 lg:mt-20 px-2 lg:px-0 relative'>
                    <div className='lg:w-[400px] lg:h-[300px] md:w-[350px] md:h-[250px] w-[300px] h-[200px]  rounded-3xl bg-gradient-to-b from-[#18DBE7] to-[#185CE7] flex justify-center items-center absolute lg:right-8 lg:-top-8 -top-2'>
                        <div className=' lg:w-[380px] lg:h-[280px] w-[280px] h-[180px] rounded-2xl bg-slate-100'></div>
                    </div>
                    <div className='lg:w-[400px] lg:h-[300px] md:w-[330px] md:h-[230px] w-[280px] h-[185px] bg-red-400 z-10 rounded-2xl flex justify-center items-center relative overflow-hidden'>
                        <Image src='/assets/images/sectionTwoImg.png' className='aspect-square object-cover rounded-2xl' fill alt='لوگوی او پی تیم' />
                    </div>
                </div>
                <div className='w-full flex flex-col lg:w-1/2 h-full space-y-3 justify-center lg:items-start items-center px-5 lg:px-0 lg:text-right text-center'>
                    <span className='w-fit bg-indigo-100 px-5 py-1 rounded-full text-xs font-extrabold text-[#00004E]'>درمورد تیم</span>
                    <p className='text-[#00004E] lg:text-[27px] text-xl font-extrabold leading-10 w-full lg:w-1/2 '>تیم برنامه نویسی اوپی،تیم خود کفا در حوزه ساخت و طراحی وب</p>
                    <span className='lg:text-xl text-sm  leading-[43px_!important] font-extrabold text-[#7986A4] w-full lg:w-4/5 '>تیم اوپی تاسیس شده در 1402/10/1 ، این تیم تشکیل شده از چند فریلنسر  که تجربه کافی در حوزه برنامه نویسی  را دارا هستند. یک تیم خوش ذوق و خلاق در زمینه ساخت سایت های شخصی ،شرکتی، فروشگاهی و ... که شعارشان نوآوری و ایده های ناب هست و از مهم ترین حسن های این تیم نظم و مسعولیت پذیری است. حسن انتخاب شما سبب رضایت شما خواهد شد.</span>
                </div>
            </div>
            <div className='absolute top-20 right-1/3'>
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
