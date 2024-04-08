'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const path = usePathname();
    return (
        <div className='lg:w-1/5 w-full flex lg:flex-col justify-center items-start lg:space-y-5 space-x-2 lg:space-x-0 space-x-reverse'>

            <div className='w-full sm:w-fit flex justify-center flex-col lg:flex-row items-center'>
                <Link href='/login' className={`${path == '/login' ? "text-slate-100 bg-blue-700" : "text-[#00004E] bg-slate-100"} font-extrabold rounded-3xl sm:w-[154px] sm:h-[94px] w-full py-10 text-md lg:text-xl shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors`}>ورود</Link>
                {path == '/login' ?
                    <div className='w-8 h-10 lg:w-10 lg:h-8 flex flex-col lg:flex-row items-center relative'>
                        <div className='w-full h-2 lg:w-2 lg:h-full lg:rounded-tl-[35px] rounded-b-[35px] lg:rounded-br-none bg-blue-700'></div>
                        <div className='w-6 h-full lg:w-full lg:h-6 bg-blue-700 absolute'></div>
                    </div>
                    :
                    null
                }
            </div>
            <div className='w-full sm:w-fit flex justify-center flex-col lg:flex-row items-center'>
                <Link href='/signup' className={`${path == '/signup' ? "text-slate-100 bg-blue-700" : "text-[#00004E] bg-slate-100"} font-extrabold rounded-3xl sm:w-[154px] sm:h-[94px] w-full py-10 text-md lg:text-xl shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors`}>ثبت نام</Link>
                {path == '/signup' ?
                    <div className='w-8 h-10 lg:w-10 lg:h-8 flex flex-col lg:flex-row items-center relative'>
                        <div className='w-full h-2 lg:w-2 lg:h-full lg:rounded-tl-[35px] rounded-b-[35px] lg:rounded-br-none bg-blue-700'></div>
                        <div className='w-6 h-full lg:w-full lg:h-6 bg-blue-700 absolute'></div>
                    </div>
                    :
                    null
                }
            </div>

        </div >

    )
}

export default Sidebar