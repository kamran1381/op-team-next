'use client'
import React, { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
// import ReCAPTCHA from "react-google-recaptcha"

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    const [registerClickCount, setRegisterClickCount] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRegisterClickCount(prevCount => prevCount + 1);
        console.log(formData);
    };

    return (
        <>
            {registerClickCount >= 3 && (
                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY} />
            )}
            <form className='sm:w-2/3 w-full p-5 flex flex-col items-center space-y-5' onSubmit={handleSubmit}>
                <div className='w-full flex sm:flex-row flex-col items-center space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-5'>
                    <input
                        type="text"
                        className='sm:w-1/3 w-full  border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors'
                        placeholder='نام کاربری'
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className='w-full border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors'
                        placeholder='آدرس ایمیل خود را وارد کنید'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-full flex sm:flex-row flex-col items-center space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-5'>
                    <input
                        type="password"
                        className='sm:w-1/2 w-full border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors'
                        placeholder='رمز عبور خود را وارد کنید'
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        className='sm:w-1/2 w-full border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors'
                        placeholder='رمز عبور خود را مجددا تکرار کنید'
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button className='bg-blue-700 text-white w-1/2 sm:w-1/3 p-3 rounded-2xl hover:bg-blue-600 transition-colors'>ثبت نام</button>
            </form>
            <div className='w-full relative pb-5'>
                <span className='border border-gray-300 rounded-full w-7 h-7 bg-slate-100 absolute left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center'>یا</span>
                <div className='w-full h-px bg-gray-300'></div>
            </div>
            <form className='sm:w-2/3 w-full' action="">
                <button className='w-full sm:text-base text-xs p-3 rounded-3xl bg-rose-500 flex justify-center items-center space-x-reverse space-x-5 border text-white hover:bg-rose-400 transition-colors'>
                    <span>ثبت نام با استفاده از گوگل</span>
                    <FaGoogle className='text-xl' />
                </button>
            </form>
            <form className='sm:w-2/3 w-full' action="">
                <button className='w-full sm:text-base text-xs p-3 rounded-3xl bg-slate-900 flex justify-center items-center space-x-reverse space-x-5 text-white hover:bg-slate-800 transition-colors'>
                    <span>ثبت نام با استفاده از گیت هاب</span>
                    <FaGithub className='text-xl' />
                </button>
            </form>
        </>
    );
};

export default SignupForm;
