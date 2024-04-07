import React from 'react';
import Image from 'next/image';
import { CiClock2 } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import Instagram from '@/components/icons/instagram';
import Link from 'next/link';



const Footer = () => {
    return (
        <div className='w-full flex justify-center bg-gradient-to-b from-[#01C2E1] from-[-10%] to-[#0013B7] to-80%  xl:px-0 px-2'>
            <div className='w-full max-w-7xl flex flex-col py-5 space-y-3'>
                <div className='w-full flex flex-col lg:flex-row lg:items-start lg:justify-between items-center space-y-14 lg:space-y-0 py-20'>

                    <div className='flex flex-col lg:items-start items-center space-y-5'>

                        <div className='flex flex-col lg:items-start items-center space-y-3'>
                            <div className='flex justify-center items-center w-[100px] h-[80px] rounded-2xl overflow-hidden shadow-sm shadow-slate-800 relative'>
                                <Image src='/assets/images/logo.png' loading='lazy' className='object-cover' fill alt='لوگوی او پی تیم' />
                            </div>
                            <span className='text-slate-100  lg:text-right text-center'>
                                اوپی تیم انتخابی مطمعن برای کسانی که زیبایی و خلاقیت  را برمی‌گزینند.
                            </span>
                        </div>

                        <div className='flex flex-col space-y-3 items-start'>
                            <div className='flex items-center space-x-2 space-x-reverse'>
                                <div className='bg-white p-1 rounded-xl shadow-md'>
                                    <FaPhone size={25} className='bg-slate-900 text-white p-1 rounded-full shadow-md aspect-square' />
                                </div>
                                <Link href='tel:09925616704' className='text-slate-50 text-base'>09925616704</Link>
                            </div>


                            <div className='flex items-center space-x-2 space-x-reverse'>
                                <CiClock2 size={32} className='bg-white p-1 rounded-xl shadow-md aspect-square' />
                                <span className='text-slate-50 text-base'>شنبه تا چهارشنبه </span>
                            </div>

                        </div>

                        <div className='flex items-center space-x-3 space-x-reverse'>
                            <Link href={'https://instagram.com/instagram'}><Instagram /></Link>
                            <Link href={'https://t.me/telegram'}><BiLogoTelegram className='bg-sky-500 aspect-square rounded-full shadow-md p-1' color='white' size={27} /></Link>
                            <Link href={'https://t.me/telegram'}><FaLinkedinIn className='aspect-square' color='white' size={24} /></Link>
                        </div>

                    </div>


                    <div className='flex flex-col lg:items-start items-center space-y-5'>
                        <span className='flex justify-start lg:items-start items-center flex-col space-y-2'>
                            <span className='text-white text-base font-bold'>بخش های سایت</span>
                            <div className='w-7 h-1 rounded-full bg-white'></div>
                        </span>
                        <div className='flex flex-col lg:items-start items-center space-y-3'>
                            <Link href={'/'} className='text-slate-100 font-semibold'>سفارش سایت </Link>
                            <Link href={'/'} className='text-slate-100 font-semibold'>درباره ما  </Link>
                            <Link href={'/'} className='text-slate-100 font-semibold'>پروژه های ما  </Link>

                        </div>
                    </div>

                    <div className='flex flex-col space-y-10'>
                        <div className='lg:w-2/3 w-full lg:text-right text-center flex flex-col lg:items-start items-center space-y-2'>
                            <span className='text-slate-100 font-bold text-base'>ساخت انواع سایت های فروشگاهی،شرکتی،خبری و مقاله ایی،گیمینگ،شخصی و ....</span>

                            <span className='text-sm text-slate-100 '>
                                تیم خوش ذوق و خلاق در حوزه برنامه نویسی و طراحی سایت
                            </span>
                        </div>


                        <div className=' w-full flex lg:justify-end justify-center'>
                            <div className="flex justify-center items-center bg-slate-100 rounded-[34px] px-20 py-6">
                                <div className="flex flex-col items-center space-y-5 ">
                                    <span className="text-center text-sm w-full text-[#00004E] font-bold">
                                        برای اطلاع از اخبار سایت آدرس ایمیل خود را وارد کنید
                                    </span>

                                    <div className="flex items-center relative w-full h-7 overflow-hidden rounded-full shadow-md shadow-[#0000005c]">
                                        <input
                                            type="text"
                                            className="px-4 border outline-none w-full h-full text-slate-600 text-xs rounded-full"
                                            placeholder="ایمیل تان را وارد کنید"

                                        />
                                        <button className="absolute left-0 h-full rounded-full bg-[#0055FF] text-sm text-white px-4  hover:bg-blue-600 transition-colors duration-300">
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
