import React from 'react';
import Image from 'next/image';
import { CiClock2 } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='w-full flex justify-center bg-gradient-to-bl from-[#00FFF0] to-[#0012B7]'>
            <div className='w-full max-w-7xl flex flex-col  py-5 space-y-3'>
                <div className=' grid grid-cols-4  py-8 gap-4'>
                    <div className='flex flex-col pt-2'>
                        <div className='pt-2'>
                            <Image src='/assets/images/logo.png' loading='lazy' width={100} height={100} alt='لوگوی او پی تیم' />
                            <div className='py-5 space-y-7'>
                                <span className='text-slate-100 border-slate-100  '>
                                    اوپی تیم انتخابی مطمعن برای کسانی که زیبایی و خلاقیت  را برمیگزینند.
                                </span>
                                <div className='flex items-center gap-2'>
                                    <FaPhone size={22} color='white' />
                                    <span className='text-slate-50 text-base'>0912201986</span>
                                </div>


                                <div className='flex items-center gap-2'>
                                    <CiClock2 size={25} color='white' />
                                    <span className='text-slate-50 text-base'>شنبه تا چهارشنبه </span>
                                </div>

                                <div className='flex items-center space-x-3'>
                                    <div></div>
                                    <FaLinkedin color='white' size={20} />
                                    <FaInstagram color='white' size={20} />
                                    <FaTelegram color='white' size={20} />
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className='pt-2'>
                        <div className='flex flex-col items-center'>
                            <span className='text-white text-base font-bold border-b border-slate-100  py-3'>
                                بخش های سایت
                            </span>
                            <div className='flex flex-col py-3 space-y-5 '>
                                <span className='text-slate-300'>سفارش سایت </span>
                                <span className='text-slate-300'>درباره ما  </span>
                                <span className='text-slate-300'>پروژه های ما  </span>

                            </div>
                        </div>
                    </div>
                    <div className='pt-2'>
                        <div className='flex flex-col py-4'>
                          <span className='text-white font-bold text-base'>ساخت انواع سایت های فروشگاهی،شرکتی،خبری و مقاله ایی،گیمینگ،شخصی و ....</span>

                          <span className='text-sm text-slate-200 pt-2'>
                          تیم خوش ذوق و خلاق در حوزه برنامه نویسی و طراحی سایت
                          </span>
                        </div>
                    </div>
                    <div className='pt-2'>
                        
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
