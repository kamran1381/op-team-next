'use client'
import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha"
import SignupWithGoogle from './signupwithgoogle';
import SignupWithGithub from './signupwithgithub';

const SignupForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const recaptchaRef = useRef();

    const [registerClickCount, setRegisterClickCount] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (registerClickCount >= 3) {
            const token = await recaptchaRef.current.getValue();
            if (token) {
                console.log('token created', token);
            } else {
                console.log('token not created');
            }
            console.log('logged in with captcha');
        } else {
            console.log('logged in without captcha');
        }
        setRegisterClickCount(prevCount => prevCount + 1);
    };

    return (
        <>

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
                {registerClickCount >= 3 && (
                    <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
                        ref={recaptchaRef}
                        size="normal"
                    />
                )}
                <button className='bg-blue-700 text-white w-1/2 sm:w-1/3 p-3 rounded-2xl hover:bg-blue-600 transition-colors'>ثبت نام</button>
            </form>

            <div className='w-full relative pb-5'>
                <span className='border border-gray-300 rounded-full w-7 h-7 bg-slate-100 absolute left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center'>یا</span>
                <div className='w-full h-px bg-gray-300'></div>
            </div>

            <SignupWithGoogle />
            <SignupWithGithub />

        </>
    );
};

export default SignupForm;
