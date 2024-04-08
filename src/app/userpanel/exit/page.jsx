import React from 'react';
import Panelheader from '@/components/userPanel/panelheader';
import Sidebar from '@/components/userPanel/sidebar';
import { handleSignOut } from '@/lib/actions';
import { IoPersonSharp } from 'react-icons/io5';

const Exit = () => {

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center sm:p-5 p-1 relative '>
                <div className='w-full max-w-7xl bg-[#DDE5FA] py-20 flex justify-center rounded-2xl mt-24'>
                    <div className='sm:w-3/4 w-full flex-col lg:flex-row flex justify-center items-center lg:space-x-3 lg:space-x-reverse px-1 space-y-3 lg:space-y-0'>
                        <Sidebar />
                        <div className='lg:w-4/5 w-full bg-slate-100 rounded-3xl shadow-md shadow-gray-400 py-12 px-1 flex flex-col space-y-10 items-center '>
                            <Panelheader />
                            <div className='w-full flex justify-center items-center space-x-10 space-x-reverse py-10'>
                                <span className='text-[#00004E] text-xl font-extrabold'>به امید دیدار دوباره....</span>
                                <div className='overflow-hidden rounded-full bg-gradient-to-bl from-[#00FFF0] to-[#0012B7] p-1 shadow-md'>
                                    <IoPersonSharp size={120} className="text-[#7986A4] bg-slate-100 p-0.5 rounded-full shadow-md" />
                                </div>
                            </div>
                            <form action={handleSignOut} className='text-slate-100 text-nowrap bg-blue-600 font-extrabold rounded-2xl h-[50px] w-1/2 lg:w-1/3 text-sm sm:text-base shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-700  transition-colors '>
                                <button className='w-full h-full'>خروج از حساب </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Exit;
