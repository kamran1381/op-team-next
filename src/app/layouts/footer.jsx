import React from 'react';
import Image from 'next/image';
import { CiClock2 } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='w-full flex justify-center bg-gradient-to-bl from-[#00FFF0] to-[#0012B7] xl:px-0 px-2'>
            <div className='w-full max-w-7xl flex flex-col py-5 space-y-3'>
                <div className='w-full flex flex-col lg:flex-row lg:items-start lg:justify-between items-center space-y-14 lg:space-y-0 py-20'>

                    <div className='flex flex-col lg:items-start items-center space-y-5'>

                        <div className='flex flex-col lg:items-start items-center space-y-3'>
                            <div className='flex justify-center items-center w-[100px] h-[80px] rounded-2xl overflow-hidden shadow-sm shadow-slate-800 relative'>
                                <Image src='/assets/images/logo.png' loading='lazy' className='object-cover' fill alt='لوگوی او پی تیم' />
                            </div>
                            <span className='text-slate-100 border-slate-100 lg:text-right text-center'>
                                اوپی تیم انتخابی مطمعن برای کسانی که زیبایی و خلاقیت  را برمی‌گزینند.
                            </span>
                        </div>

                        <div className='flex flex-col space-y-3 items-start'>
                            <div className='flex items-center space-x-2 space-x-reverse'>
                                <div className='bg-white p-1 rounded-xl shadow-md'>
                                    <FaPhone size={25} className='bg-slate-900 text-white p-1 rounded-full shadow-md aspect-square' />
                                </div>
                                <span className='text-slate-50 text-base'>09031864296</span>
                            </div>


                            <div className='flex items-center space-x-2 space-x-reverse'>
                                <CiClock2 size={32} className='bg-white p-1 rounded-xl shadow-md aspect-square' />
                                <span className='text-slate-50 text-base'>شنبه تا چهارشنبه </span>
                            </div>

                        </div>

                        <div className='flex items-center space-x-3 space-x-reverse'>
                            <FaInstagram className='text-white bg-gradient-to-tr p-px aspect-square shadow-md from-yellow-500 to-purple-600 rounded-md' size={27} />
                            <FaTelegram className='text-sky-500 bg-white rounded-full aspect-square shadow-md' size={27} />
                            <FaLinkedinIn className='aspect-square' color='white' size={24} />
                        </div>

                    </div>


                    <div className='flex flex-col lg:items-start items-center space-y-5'>
                        <span className='flex justify-start lg:items-start items-center flex-col space-y-2'>
                            <span className='text-white text-base font-bold'>بخش های سایت</span>
                            <div className='w-7 h-1 rounded-full bg-white'></div>
                        </span>
                        <div className='flex flex-col lg:items-start items-center space-y-3'>
                            <span className='text-slate-200 font-semibold'>سفارش سایت </span>
                            <span className='text-slate-200 font-semibold'>درباره ما  </span>
                            <span className='text-slate-200 font-semibold'>پروژه های ما  </span>

                        </div>
                    </div>

                    <div className='flex flex-col space-y-10'>
                        <div className='lg:w-2/3 w-full lg:text-right text-center flex flex-col lg:items-start items-center space-y-2'>
                            <span className='text-white font-bold text-base'>ساخت انواع سایت های فروشگاهی،شرکتی،خبری و مقاله ایی،گیمینگ،شخصی و ....</span>

                            <span className='text-sm text-slate-200 '>
                                تیم خوش ذوق و خلاق در حوزه برنامه نویسی و طراحی سایت
                            </span>
                        </div>


                        <div className=' w-full flex lg:justify-end justify-center'>
                            <div className="flex justify-center items-center bg-slate-100 rounded-3xl px-8 py-6">
                                <div className="flex flex-col items-center space-y-5 ">
                                    <span className="text-center text-sm w-full text-indigo-900 font-bold">
                                        برای اطلاع از اخبار سایت آدرس ایمیل خود را وارد کنید
                                    </span>

                                    <div className="flex items-center relative w-full">
                                        <input
                                            type="text"
                                            className="rounded-full py-2 px-4 border outline-none w-full shadow-sm"
                                            placeholder="ایمیل تان را وارد کنید"

                                        />
                                        <button className="absolute  left-0 rounded-full bg-blue-500 text-white px-4 py-2  hover:bg-blue-600 transition-colors duration-300">
                                            عضویت
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>





                </div>

                <span className='w-full text-slate-100 border-t border-slate-100 text-center pt-5'>
                    تمامی حقوق برای وبسایت اوپی محفوظ است.
                </span>
            </div>
        </div>
    );
}

export default Footer;
