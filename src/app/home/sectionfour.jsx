import React from 'react';
import HomeSwiper from '../../components/homeSwiper/homeswiper';

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
        <div id='ourProjects' className='bg-white w-full flex justify-center py-10'>
            <div className='w-full max-w-7xl flex items-start space-x-3 space-x-reverse border-t-2 border-indigo-100 py-20'>
                <div className="w-2/5 flex flex-col justify-start space-y-2">
                    <span className='w-fit bg-indigo-100 px-5 py-1 rounded-full text-xs font-extrabold text-indigo-950'>پروژه های ما</span>
                    <p className='text-indigo-950 text-2xl font-extrabold leading-10 w-2/3'>برخی از پروژه های انجام شده توسط ما ....</p>
                    <span className='text-xs font-extrabold text-slate-400'>برخی از سایت هایی که توسط ما به نحو احسنت ساخته شده.</span>
                </div>
                <div className='w-3/5 h-[400px] relative bg-gradient-to-br from-[#18DBE7] to-[#185CE7] rounded-3xl overflow-hidden p-2'>
                    <HomeSwiper data={swiperData} />
                </div>

            </div>
        </div>
    );
}

export default Sectionfour;