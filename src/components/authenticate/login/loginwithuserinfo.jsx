'use client'
import { loginWithCredentials } from '@/lib/actions';
import React, { useState } from 'react';
import { toast } from 'sonner';
import {z} from 'zod'
const schema = z.object({
    email: z.string().email('آدرس ایمیل معتبر نیست'),
    password: z.string().min(6, 'رمز عبور باید حداقل 6 کاراکتر داشته باشد'),
});
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
        setIsLoading(true);

              
        try {
             if(!formData.email || !formData.password){
                toast('فیلد ها  نباید خالی باشند ' ,{
                    classNames :{
                        toast : 'text-red-600'
                    }
                })
             }else{
              schema.parse(formData);

             }
            const login = await loginWithCredentials(formData);
            if (login.status === 200) {
                toast(login.message, {
                    classNames: {
                        toast: 'text-green-600',
                    },
                });
                window.location.reload()
            } else {
                toast(login.message, {
                    classNames: {
                        toast: 'text-red-600',
                    },
                });
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                toast(error.errors[0].message, {
                    classNames: {
                        toast: 'text-red-600',
                    },
                });
            } else {
                  toast('مشکلی پیش آمده است لطفا مجدد تلاش کنید', {
                      classNames: {
                          toast: 'text-red-600',
                     },
                 });
            }
        } finally {
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