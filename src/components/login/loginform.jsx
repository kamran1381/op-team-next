import React from 'react';
import {FaGoogle } from 'react-icons/fa';
import Link from 'next/link'
import LoginWithGithub from './loginwithgithub';

const LoginForm = () => {
    return (
        <>
            <form action="" className='sm:w-2/3 w-full p-5 flex flex-col items-center space-y-5'>
                <div className='w-full flex items-center space-x-reverse space-x-5'>
                    <input type="text" className='w-full border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='آدرس ایمیل خود را وارد کنید' />
                </div>
                <div className='w-full flex items-center space-x-reverse space-x-5'>
                    <input type="password" className='w-full border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='رمز عبور خود را وارد کنید' />
                </div>
                <div className='w-full flex lg:flex-row flex-col space-y-5 lg:space-y-0 items-center justify-between '>
                    <div className='flex space-x-2 space-x-reverse items-center'>
                        <input type="checkbox" className='w-4 h-4 accent-blue-700'/>
                        <span className='lg:text-sm text-xs text-indigo-950 font-bold'>مرا به خاطر بسپار</span>
                    </div>
                    <Link href='/forgotpassword' className='text-xs text-blue-500 hover:text-blue-600 transition-colors font-bold'>رمز عبور خود را فراموش کرده‌اید؟</Link>
                </div>
                <button className='bg-blue-700 text-white w-1/3 p-3 rounded-2xl hover:bg-blue-600 transition-colors'>ورود</button>
            </form>
            <div className='w-full relative pb-5'>
                <span className='border border-gray-300 rounded-full w-7 h-7 bg-slate-100 absolute left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center'>یا</span>
                <div className='w-full h-px bg-gray-300'></div>
            </div>
            <form className='sm:w-2/3 w-full' action="">
                <button className='w-full sm:text-base text-xs p-3 rounded-3xl bg-rose-500 flex justify-center items-center space-x-reverse space-x-5 border text-white hover:bg-rose-400 transition-colors'>
                    <span>ورود با استفاده از گوگل</span>
                    <FaGoogle className='text-xl' />
                </button>
            </form>
            <LoginWithGithub />
        </>
    );
}

export default LoginForm;
