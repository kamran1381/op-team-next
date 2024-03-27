'use client'
import React from 'react';
import Link from 'next/link';
import { handleSignOut } from '@/lib/actions';
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const path = usePathname();

    return (
        <div className='lg:w-1/5 w-full flex lg:flex-col justify-center items-center lg:space-y-5 space-x-2 lg:space-x-0 space-x-reverse'>
            <Link href='/admin/allorders' className={`${path == '/admin/allorders' ? "text-slate-100 bg-blue-700" : "text-indigo-950 bg-slate-100"} font-extrabold rounded-2xl sm:w-[154px] sm:h-[94px] w-full py-5 px-3 sm:px-0 sm:py-0 text-sm sm:text-base shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors `}>سفارشات</Link>
            <Link href='/admin/cards' className={`${path == '/admin/cards' ? "text-slate-100 bg-blue-700" : "text-indigo-950 bg-slate-100"} text-nowrap  font-extrabold rounded-2xl sm:w-[154px] sm:h-[94px] w-full py-5 px-3 sm:px-0 sm:py-0 text-sm sm:text-base shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors`}>کارت‌ها</Link>
            <form action={handleSignOut} className='text-indigo-950 text-nowrap bg-slate-100 font-extrabold rounded-2xl sm:w-[154px] sm:h-[94px] w-full py-5 px-3 sm:px-0 sm:py-0 text-sm sm:text-base shadow-gray-400 shadow-md flex justify-center items-center hover:bg-rose-500 hover:text-white transition-colors '>
                <button className='w-full h-full'>خروج از حساب </button>
            </form>
        </div>
    );
}

export default Sidebar;


