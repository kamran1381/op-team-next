import React from 'react';
import Sidebar from '../layouts/sidebar';
import { MdCloudUpload } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import Panelheader from '../layouts/header';

const Account = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center p-5 relative'>
            <div className='w-full max-w-7xl bg-[#DDE5FA] h-screen flex justify-center rounded-2xl'>
                <div className='w-3/4 flex justify-center items-center space-x-3 space-x-reverse'>
                    <Sidebar />
                    <div className='w-4/5 bg-slate-100 rounded-3xl shadow-md shadow-gray-400 p-10 flex flex-col space-y-5 items-center'>
                        <Panelheader />
                        <div className='flex justify-center items-center py-24 px-20'>
                            <div className='flex flex-col items-center px-4'>
                                <span className='text-lg mb-2 font-bold text-indigo-950'>درخواست ها</span>
                                <div className="flex space-x-2 space-x-reverse bg-blue-700 px-5 py-4 items-center rounded-md justify-center relative overflow-hidden shadow-md">
                                    <span className="text-slate-100 text-sm font-extrabold">5</span>
                                    <VscRequestChanges size={50} className=' text-slate-100' />
                                    <div className="w-12 h-12 bg-[#ffffff93] absolute -bottom-5 -right-5 "></div>
                                    <div className="w-12 h-12 bg-[#ffffff93] absolute -bottom-5 -right-5 rotate-12"></div>
                                    <div className="w-12 h-12 bg-[#ffffff93] absolute -bottom-5 -right-5 rotate-45"></div>
                                </div>
                            </div>
                            <div className='flex flex-col items-center px-4'>
                                <span className='text-lg mb-2 font-bold text-indigo-950'>تکمیل شده</span>
                                <div className="flex space-x-2 space-x-reverse bg-blue-700 px-5 py-4 items-center rounded-md justify-center relative overflow-hidden shadow-md">
                                    <span className="text-slate-100 text-sm font-extrabold">2</span>
                                    <MdCloudUpload size={50} className='text-slate-100' />
                                    <div className="w-12 h-12 bg-[#ffffff93] absolute -bottom-5 -right-5 "></div>
                                    <div className="w-12 h-12 bg-[#ffffff93] absolute -bottom-5 -right-5 rotate-12"></div>
                                    <div className="w-12 h-12 bg-[#ffffff93] absolute -bottom-5 -right-5 rotate-45"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
