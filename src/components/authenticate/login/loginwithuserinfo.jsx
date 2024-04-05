'use client';
import { loginWithCredentials } from '@/lib/actions';
import React, { useState } from 'react';
import { toast } from 'sonner';


const LoginWithUserInfo = () => {

    const [isLoading, setIsLoading] = useState(false)

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
        setIsLoading(true)

        try {
            const login = await loginWithCredentials(formData);
            toast('ورود موفق', {
                classNames: {
                    toast: 'text-lime-500',
                },
            });
        } catch (error) {

            if (error.data) {
                toast(error.data.message, {
                    classNames: {
                        toast: 'text-rose-500',
                    },
                });
            }else{
                toast('درخواست ناموفق , لطفا مجددا تلاش کنید', {
                    classNames: {
                        toast: 'text-rose-500',
                    },
                });
            }

        }
        finally {
            setIsLoading(false);
        }

    }

    return (
        <form onSubmit={loginFormSubmitHandler} className='sm:w-2/3 w-full p-5 pb-0 flex flex-col items-center space-y-5'>
            <div className='w-full flex items-center space-x-reverse space-x-5'>
                <input onChange={handleChange} name="email" type="text" className='w-full border shadow p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='آدرس ایمیل خود را وارد کنید' />
            </div>
            <div className='w-full flex items-center space-x-reverse space-x-5'>
                <input onChange={handleChange} name="password" type="password" className='w-full shadow border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='رمز عبور خود را وارد کنید' />
            </div>
            <div className='w-full flex lg:flex-row flex-col space-y-5 lg:space-y-0 items-center justify-between '>
                <div className='flex space-x-2 space-x-reverse items-center'>
                    <input name="rememberMe" type="checkbox" className='w-4 h-4 accent-blue-700 shadow' />
                    <span className='lg:text-sm text-xs text-[#00004E] font-bold'>مرا به خاطر بسپار</span>
                </div>
            </div>
            <button type="submit" className='bg-blue-700 text-white w-1/3 p-3 rounded-2xl hover:bg-blue-600 transition-colors disabled:bg-slate-500' disabled={isLoading}> {isLoading ? 'در حال اجرا ...' : 'ورود'}</button>
        </form>
    );
}

export default LoginWithUserInfo;