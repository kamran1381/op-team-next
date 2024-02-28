import React from 'react';
import Link from 'next/link';
const Sidebar = () => {
    return (
        <div className='w-1/5  flex  flex-col justify-center items-center  space-x-2 space-y-3 space-x-reverse'>
            <Link href='/login' className="text-slate-100 bg-blue-700 font-extrabold rounded-2xl sm:w-[150px] sm:h-[90px] w-full py-5 text-sm lg:text-base shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 transition-colors ">ثبت سفارش </Link>
            <Link href='/signup' className="text-indigo-950 bg-slate-100 font-extrabold rounded-2xl sm:w-[150px] sm:h-[90px] w-full py-5 text-sm lg:text-base shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors ">خارج شدن</Link>
        </div>
    );
}

export default Sidebar;
