
import React from 'react';
import Link from 'next/link';
import { signOut } from '@/lib/auth';

const Sidebar = () => {

   const handleSignOut = async() => {
    'use server';
    await signOut('/')
   }
    return (
        <form action={handleSignOut}>
        <div className='lg:w-1/5 w-full flex lg:flex-col justify-center items-center lg:space-y-5 space-x-2 lg:space-x-0 space-x-reverse'>
            <Link href='account' className="text-slate-100 text-nowrap bg-blue-700 font-extrabold rounded-2xl sm:w-[154px] sm:h-[94px] w-full py-5 px-3 sm:px-0 sm:py-0 text-sm sm:text-base shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 transition-colors ">حساب</Link>
            <Link href='orders' className="text-indigo-950 text-nowrap bg-slate-100 font-extrabold rounded-2xl sm:w-[154px] sm:h-[94px] w-full py-5 px-3 sm:px-0 sm:py-0 text-sm sm:text-base shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors ">سفارش سایت</Link>
            <button className="text-indigo-950 text-nowrap bg-slate-100 font-extrabold rounded-2xl sm:w-[154px] sm:h-[94px] w-full py-5 px-3 sm:px-0 sm:py-0 text-sm sm:text-base shadow-gray-400 shadow-md flex justify-center items-center hover:bg-rose-500 hover:text-white transition-colors " >خروج از حساب </button>
        </div>
        </form>
    );
}

export default Sidebar;
