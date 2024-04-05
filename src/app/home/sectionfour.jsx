import React from 'react';
import HomeSwiper from '../../components/homeSwiper/homeswiper';
import AnimateCircles from '@/components/animatecircles';

const swiperData = [

    {
        name: 'پروژه فدک',
        image: '/ss.png'
    },
    {
        name: 'پروژه اوپی ',
        image: '/ss.png'
    }
]


const Sectionfour = () => {


    return (
        <div id='ourProjects' className='bg-white w-full flex justify-center py-10 relative'>
            <div className='w-full max-w-7xl flex flex-col lg:flex-row xl:px-0 px-2 items-start lg:space-y-0 space-y-3 lg:space-x-3 lg:space-x-reverse border-t-2 border-indigo-100 py-20 z-10'>
                <div className="lg:w-2/5 w-full flex flex-col items-center text-center lg:text-right lg:items-start lg:justify-start space-y-2">
                    <span className='w-fit bg-indigo-100 px-5 py-1 rounded-full text-xs font-extrabold text-[#00004E]'>پروژه های ما</span>
                    <p className='text-[#00004E] lg:text-[27px] text-xl font-extrabold leading-10 w-2/3'>برخی از پروژه های انجام شده توسط ما ....</p>
                    <span className='text-xs font-extrabold text-[#7986A4]'>برخی از سایت هایی که توسط ما به نحو احسن ساخته شده.</span>
                </div>
                <div className='lg:w-3/5 w-full h-[400px] relative bg-gradient-to-br from-[#18DBE7] to-[#185CE7] rounded-3xl overflow-hidden p-2'>
                    <HomeSwiper data={swiperData} />
                </div>

            </div>

            <div className='absolute top-1/2 right-1/3'>
                <AnimateCircles />
            </div>
        </div>
    );
}

export default Sectionfour;
