'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const path = usePathname();
    return (
        <div className='lg:w-1/5 w-full flex lg:flex-col justify-center items-start lg:space-y-5 space-x-2 lg:space-x-0 space-x-reverse'>

            <div className='flex justify-center flex-col lg:flex-row items-center'>
                <Link href='/login' className={`${path == '/login' ? "text-slate-100 bg-blue-700" : "text-[#00004E] bg-slate-100"} font-extrabold rounded-3xl sm:w-[154px] sm:h-[94px] w-full py-5 text-sm lg:text-xl shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors`}>ورود</Link>
                {path == '/login' ?
                    <div className='w-8 h-10 flex flex-col items-center relative'>
                        <div className='w-2 h-full rounded-l-[35px] bg-blue-700'></div>
                        <div className='w-full h-6 bg-blue-700 absolute'></div>
                    </div>
                    :
                    null 
                }
            </div>
            <div className='flex justify-center flex-col lg:flex-row items-center'>
                <Link href='/signup' className={`${path == '/signup' ? "text-slate-100 bg-blue-700" : "text-[#00004E] bg-slate-100"} font-extrabold rounded-3xl sm:w-[154px] sm:h-[94px] w-full py-5 text-sm lg:text-xl shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors`}>ثبت نام</Link>
                {path == '/signup' ?
                    <div className='w-10 h-8 flex items-center relative'>
                        <div className='w-2 h-full rounded-l-[35px] bg-blue-700'></div>
                        <div className='w-full h-6 bg-blue-700 absolute'></div>
                    </div>
                    :
                    null
                }
            </div>

        </div >

    )
}

export default Sidebar