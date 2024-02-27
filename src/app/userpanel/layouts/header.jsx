import React from 'react';
import Image from 'next/image';
import { FaUser } from "react-icons/fa";

const Panelheader = () => {
    return (
        <div className='flex w-full'>
            <div className='flex w-full items-center'>
                <div className='w-20 h-16 relative overflow-hidden rounded-xl shadow-md shadow-gray-500'>
                    <Image src='/assets/images/logo.png' className='object-cover' loading='lazy' fill alt='لوگوی او پی تیم' />
                </div>
                <span className='pr-6 font-bold'>آقای/خانم رضا عسگری به اوپی خوش آمدید.</span>
            </div>
            <div className='flex items-end'>
                <div className='mt-5 px-6'>
                    <div className='overflow-hidden rounded-full bg-gradient-to-bl from-[#00FFF0] to-[#0012B7] p-1 shadow-md'>
                        <FaUser size={80} className='bg-slate-900 text-white p-1 rounded-full shadow-md' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panelheader;
