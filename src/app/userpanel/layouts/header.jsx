import React from 'react';
import Image from 'next/image';
import { FaUser } from "react-icons/fa";
// import { auth } from '@/lib/auth';

const Panelheader =async () => {


    return (
        <div className='w-full flex  items-center flex-col md:flex-row'>
            <div className='flex w-full sm:flex-row flex-row-reverse items-center sm:justify-around justify-center'>
                <div className='w-20 h-16 relative overflow-hidden rounded-xl shadow-md shadow-gray-500 sm:block hidden'>
                    <Image src='/assets/images/logo.png' className='object-cover' loading='lazy' fill alt='لوگوی او پی تیم' />
                </div>
                <span className='pr-2 md:pr-6 font-bold sm:text-base text-xs'>به اوپی خوش آمدید.</span>
                <div className='overflow-hidden rounded-full bg-gradient-to-bl from-[#00FFF0] to-[#0012B7] p-1 shadow-md'>
                    <FaUser size={60} className='bg-slate-900 text-white p-1 rounded-full shadow-md' />
                </div>
            </div>
        </div>
    );
}

export default Panelheader;
