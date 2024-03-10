'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { z } from "zod";

const LoginWithUserInfo = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const mySchema = z.object({
        userEmail: z.string({ required_error: " وارد کردن ایمیل اجباری است" }).email('ایمیل اشتباه است'),
        userPassword: z.string({ required_error: " وارد کردن پسورد اجباری است" })
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
        setIsLoading(true)
        setErrorMsg(null)
        try {
            mySchema.parse(formData);
            const response = await axios.post('http://api.op-team.ir/login', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            }
            )

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.')
            }

            // Handle response if necessary
            const res = await response.json()
            console.log(res)
        } catch (error) {
            console.log(error);
            // setErrorMsg(JSON.parse(error.message));
        }
        finally {
            setIsLoading(false);
        }

    }

    return (
        <form onSubmit={loginFormSubmitHandler} className='sm:w-2/3 w-full p-5 pb-0 flex flex-col items-center space-y-5'>
            {errorMsg &&
                <ul className="bg-rose-300 w-full flex flex-col space-y-1 p-2 rounded-md">
                    {errorMsg.map((item, index) => (
                        <li key={index} className="text-white w-full flex items-center text-xs"><FaChevronLeft />{item.message}</li>
                    ))}
                </ul>
            }
            <div className='w-full flex items-center space-x-reverse space-x-5'>
                <input onChange={handleChange} name="userEmail" type="text" className='w-full border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='آدرس ایمیل خود را وارد کنید' />
            </div>
            <div className='w-full flex items-center space-x-reverse space-x-5'>
                <input onChange={handleChange} name="userPassword" type="password" className='w-full border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='رمز عبور خود را وارد کنید' />
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
