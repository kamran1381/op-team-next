import React from 'react';
import Card from '../../components/card';
import AnimateCircles from '@/components/animatecircles';


const Sectionthree = () => {
    return (
        <div id='ourMembers' className='bg-white w-full flex justify-center py-10 relative'>
            <div className='w-full max-w-7xl flex flex-col items-center space-y-20 z-10'>
                <span className='bg-blue-700 py-3 px-7 rounded-3xl lg:text-2xl text-xl font-extrabold text-slate-100'>اعضای تیم اوپی</span>
                <div className='w-full xl:px-0 px-2 flex flex-wrap lg:justify-between justify-center gap-5'>
                    <Card />
                </div>
            </div>
            <div className='absolute top-10 right-1/4'>
                <AnimateCircles />
            </div>
            <div className='absolute top-1/2 left-1/4'>
                <AnimateCircles />
            </div>
            <div className='absolute bottom-2 right-1/3'>
                <AnimateCircles />
            </div>
        </div>

    );
}

export default Sectionthree;
