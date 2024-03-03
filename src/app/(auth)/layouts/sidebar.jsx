import React from 'react'
import Link from 'next/link'

const Sidebar = () => {

    return (
        <div className='lg:w-1/5 w-full flex lg:flex-col justify-center items-center lg:space-y-5 space-x-2 lg:space-x-0 space-x-reverse'>
            <Link href='/login' className="text-slate-100 bg-blue-700 font-extrabold rounded-2xl sm:w-[154px] sm:h-[94px] w-full py-5 text-sm lg:text-base shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 transition-colors ">ورود</Link>
            <Link href='/signup' className="text-indigo-950 bg-slate-100 font-extrabold rounded-2xl sm:w-[154px] sm:h-[94px] w-full py-5 text-sm lg:text-base shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors ">ثبت نام</Link>
        </div>

    )
}

export default Sidebar