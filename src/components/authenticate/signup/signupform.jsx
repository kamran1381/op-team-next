'use client'
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha"
import { toast } from 'sonner';
import { z } from 'zod'

const SignupForm = () => {


    const schema = z.object({
        username: z.string().min(6, 'نام کاربری باید حداقل 6 حرف باشد'),
        email: z.string().email('آدرس ایمیل معتبر نیست'),
        password: z.string().min(6, 'رمز عبور باید حداقل 6 کاراکتر داشته باشد'),
        confirmPassword: z.string().min(6, 'تایید رمز عبور باید حداقل 6 کاراکتر داشته باشد')
    });


    const navigate = useRouter();

    const [isLoading, setIsLoading] = useState(false)


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

    const signIn = async () => {
        setIsLoading(true);

        try {
            schema.parse(formData);
            const response = await axios.post('https://api.op-team.ir/api/signup', {
                name: formData.username,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.confirmPassword
            })
            if (!response.status === 200) {
                toast("درخواست شما با خطا مواجه شد لطفا مجدد تلاش کنید", {
                    classNames: {
                        toast: 'text-red-600',
                    },
                });

            }
            if (response.status === 200) {
                toast("شما با موفقیت ثبت نام شدید", {
                    classNames: {
                        toast: 'text-green-600',
                    },
                });
                navigate.push('/login')
            }

        } catch (error) {
            console.log(error);
            if (error instanceof z.ZodError) {
                toast(error.errors[0].message, {
                    classNames: {
                        toast: 'text-red-600',
                    },
                });
            } else {
                if (error.response) {
                    if (error.response.status === 422) {
                        toast("مقادیر وارد شده مجاز نیست", {
                            classNames: {
                                toast: 'text-red-600',
                            },
                        });
                    } else {
                        toast(error.response.data.message, {
                            classNames: {
                                toast: 'text-red-600',
                            },
                        });
                    }

                } else {
                    toast("خطای نامشخص", {
                        classNames: {
                            toast: 'text-red-600',
                        },
                    });
                }
            }

        }
        finally {
            setIsLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (registerClickCount >= 3) {
            const token = await recaptchaRef.current.getValue();
            if (token) {
                signIn();
            } else {
                console.log('token not created');
            }
        } else {
            signIn();
        }
        setRegisterClickCount(prevCount => prevCount + 1);
    };

    return (
        <>

            <form className='sm:w-2/3 w-full p-5 flex flex-col items-center space-y-5' onSubmit={handleSubmit}>
                <div className='w-full flex sm:flex-row flex-col items-center space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-5'>
                    <input
                        type="text"
                        className='sm:w-1/3 w-full shadow  border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors'
                        placeholder='نام کاربری'
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className='w-full border shadow p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors'
                        placeholder='آدرس ایمیل خود را وارد کنید'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='w-full flex sm:flex-row flex-col items-center space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-5'>
                    <input
                        type="password"
                        className='sm:w-1/2 w-full shadow border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors'
                        placeholder='رمز عبور خود را وارد کنید'
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        className='sm:w-1/2 w-full shadow border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors'
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
                <button className='bg-blue-700 text-white w-1/2 sm:w-1/3 p-3 rounded-2xl hover:bg-blue-600 transition-colors disabled:bg-slate-500' disabled={isLoading}> {isLoading ? 'در حال اجرا ...' : 'ثبت نام'}</button>
            </form>

        </>
    );
};

export default SignupForm;