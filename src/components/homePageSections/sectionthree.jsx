import React from 'react';
import Card from '../card';

const Sectionthree = () => {
    return (
        <div className='bg-white w-full flex justify-center py-10'>
            <div className='w-full max-w-7xl flex flex-col items-center space-y-20 '>
                <span className='bg-blue-700 py-3 px-7 rounded-3xl text-2xl font-extrabold text-slate-100'>اعضای تیم اوپی</span>
                <div className='w-full grid grid-cols-4'>
                    <Card />
                </div>
            </div>
        </div>
        
    );
}

export default Sectionthree;
