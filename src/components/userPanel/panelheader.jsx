'use client'
import React from 'react';
import Image from 'next/image';
import { IoPersonSharp } from 'react-icons/io5';
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react';


const Panelheader = () => {
    const { data: session, status } = useSession();
    console.log(session);

    const path = usePathname();

    return (

        <div className='w-full flex justify-between items-center flex-col md:flex-row'>
            <div className='flex w-full flex-row items-center justify-around px-2'>
                <div className='w-2/3 flex items-center justify-start'>
                    <div className='sm:w-28 sm:h-20 w-20 h-10 relative overflow-hidden rounded-xl shadow-md shadow-gray-500'>
                        <Image src='/assets/images/logo.png' className='object-cover w-full h-full' loading='lazy' width={500} height={500} alt='لوگوی او پی تیم' />
                    </div>
                    <span className='pr-2 md:pr-6 font-bold sm:text-xl text-[#00004E] text-xs'>{`به اوپی خوش آمدید `}</span>
                </div>
                {path !== '/userpanel/exit' ?
                    <div className='w-1/3 flex justify-center items-center'>
                        <div className='w-20 h-20 flex justify-center items-center overflow-hidden rounded-full bg-gradient-to-bl from-[#00FFF0] to-[#0012B7] shadow-md'>
                            <IoPersonSharp size={70} className="text-[#7986A4] bg-slate-100 p-0.5 rounded-full shadow-md" />
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    );
}

export default Panelheader;
