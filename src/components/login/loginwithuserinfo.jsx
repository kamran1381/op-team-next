'use client'
import React, { useState } from 'react';
import axios from 'axios';
const LoginWithUserInfo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const loginFormSubmitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            // Fetch CSRF token
            await axios.get('https://api.op-team.ir/sanctum/csrf-cookie', {
                withCredentials: true,
                withXSRFToken : true ,
            });

            // Get XSRF token value from the form
            const token = document.querySelector('form[name="csrf-token"]').getAttribute('content');
            console.log(token)
            // Posting the data using axios
            const response = await axios.post('http://api.op-team.ir/login', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-XSRF-TOKEN': token, // Set XSRF token as the value
                    'Access-Control-Allow-Credentials': 'true',
                },
            });

            // Process response
            console.log(response.data.message);
        } catch (error) {
            // Handle errors
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={loginFormSubmitHandler} className='sm:w-2/3 w-full p-5 pb-0 flex flex-col items-center space-y-5' name="csrf-token" content="{{ csrf_token() }}">
            <div className='w-full flex items-center space-x-reverse space-x-5'>
                <input onChange={handleChange} name="email" type="text" className='w-full border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='آدرس ایمیل خود را وارد کنید' />
            </div>
            <div className='w-full flex items-center space-x-reverse space-x-5'>
                <input onChange={handleChange} name="password" type="password" className='w-full border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='رمز عبور خود را وارد کنید' />
            </div>
            <div className='w-full flex lg:flex-row flex-col space-y-5 lg:space-y-0 items-center justify-between '>
                <div className='flex space-x-2 space-x-reverse items-center'>
                    <input name="rememberMe" type="checkbox" className='w-4 h-4 accent-blue-700' />
                    <span className='lg:text-sm text-xs text-indigo-950 font-bold'>مرا به خاطر بسپار</span>
                </div>
            </div>
            <button type="submit" className='bg-blue-700 text-white w-1/3 p-3 rounded-2xl hover:bg-blue-600 transition-colors disabled:bg-slate-500' disabled={isLoading}> {isLoading ? 'در حال اجرا ...' : 'ورود'}</button>
        </form>
    );
}

export default LoginWithUserInfo;
