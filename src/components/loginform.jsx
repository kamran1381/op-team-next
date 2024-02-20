import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LoginForm = () => {
    return (
        <>
            <form action="" className='w-full p-5 flex flex-col items-center space-y-5'>
                <div className='w-full flex items-center space-x-reverse space-x-5'>
                    <input type="text" className='w-1/3 border p-3 rounded-2xl text-sm outline-none' placeholder='نام کاربری' />
                    <input type="text" className='w-full border p-3 rounded-2xl text-sm outline-none' placeholder='آدرس ایمیل خود را وارد کنید' />
                </div>
                <div className='w-full flex items-center space-x-reverse space-x-5'>
                    <input type="password" className='w-1/2 border p-3 rounded-2xl text-sm outline-none' placeholder='رمز عبور خود را وارد کنید' />
                    <input type="password" className='w-1/2 border p-3 rounded-2xl text-sm outline-none' placeholder='رمز عبور خود را مجددا تکرار کنید' />
                </div>
                <button className='bg-blue-700 text-white w-1/3 p-3 rounded-2xl'>ثبت نام</button>
            </form>
            <div className='w-full relative pb-5'>
                <span className='border border-gray-300 rounded-full w-7 h-7 bg-slate-100 absolute left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center'>یا</span>
                <div className='w-full h-px bg-gray-300'></div>
            </div>
            <form className='w-2/3' action="">
                <button className='w-full p-3 rounded-3xl bg-rose-500 flex justify-center items-center space-x-reverse space-x-5 border text-white'>
                    <span>ورود با استفاده از گوگل</span>
                    <FaGoogle className='text-xl'/>
                </button>
            </form>
            <form className='w-2/3' action="">
            <button className='w-full p-3 rounded-3xl bg-slate-900 flex justify-center items-center space-x-reverse space-x-5 text-white '>
                    <span>ورود با استفاده از گیت هاب</span>
                    <FaGithub className='text-xl'/>
                </button>
            </form>
        </>
    );
}

export default LoginForm;
