import React from 'react';
import Image from 'next/image';
import { FaUser } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import Link from 'next/link';
const Admin = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center p-5 relative'>
            <div className='w-full max-w-7xl bg-[#DDE5FA] h-screen flex justify-center rounded-2xl'>
                <div className='w-3/4 flex justify-center items-center space-x-3 space-x-reverse'>
                    <div className='w-1/5 flex flex-col justify-center items-center space-y-5'>
                        <Link href='/' className="text-slate-100 bg-blue-700 font-extrabold rounded-2xl w-[154px] h-[94px] shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 transition-colors ">حساب</Link>
                        <Link href='/' className="text-indigo-950 bg-slate-100 font-extrabold rounded-2xl w-[154px] h-[94px] shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors ">سفارش سایت</Link>
                        <Link href='/' className="text-indigo-950 bg-slate-100 font-extrabold rounded-2xl w-[154px] h-[94px] shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors ">خروج از حساب </Link>

                    </div>
                    <div className='w-4/5 bg-slate-100 rounded-3xl shadow-md shadow-gray-400 p-10 flex flex-col space-y-5 items-center'>
                        <div className='flex w-full'>
                            <div className='flex w-full items-center'>
                                <div className='w-20 h-16 relative overflow-hidden rounded-xl shadow-md shadow-gray-500'>
                                    <Image src='/assets/images/logo.png' className='object-cover' loading='lazy' fill alt='لوگوی او پی تیم' />
                                </div>
                                <span className='pr-6 font-bold'>آقای/خانم رضا عسگری به اوپی خوش آمدید.</span>
                            </div>
                            <div className='flex items-end'>
                                <div className='mt-5 px-6'>
                                    <div className='relative overflow-hidden rounded-xl shadow-md'>
                                        <FaUser size={50} className='bg-slate-900 text-white p-1 rounded-full shadow-md' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center items-center py-24 px-20'>
                            <div className='flex flex-col items-center px-4'>
                                <span className='text-base mb-2'>درخواست ها</span>
                                <MdCloudUpload size={60} className='bg-[#0045CE] text-white p-1  shadow-md' />
                            </div>
                            <div className='flex flex-col items-center px-4'>
                                <span className='text-base mb-2'>تکمیل شده</span>
                                <MdCloudUpload size={60} className='bg-[#0045CE] text-white p-1  shadow-md' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
