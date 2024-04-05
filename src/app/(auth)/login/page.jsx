import React from 'react'
import Image from 'next/image'
import LoginForm from '@/components/authenticate/login/loginform';
import Sidebar from '../../../components/authenticate/sidebar';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation'

const Login = async () => {

    const session = await auth();
    
    if (session) {
        redirect('/userpanel/account')
    }

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center p-2 lg:p-5'>
                <div className='w-full max-w-7xl bg-[#DDE5FA] py-20 flex justify-center rounded-2xl mt-24'>
                    <div className='sm:w-3/4 w-full flex-col lg:flex-row flex justify-center items-center lg:space-x-3 lg:space-x-reverse px-1 space-y-3 lg:space-y-0'>
                        <Sidebar />

                        <div className='lg:w-4/5 w-full bg-slate-100 rounded-3xl shadow-md shadow-gray-400 p-5 flex flex-col space-y-5 items-center'>
                            <div className='flex w-full items-center'>
                                <div className='w-20 h-16 relative overflow-hidden rounded-xl shadow-md shadow-gray-500'>
                                    <Image src='/assets/images/logo.png' className='object-cover' loading='lazy' fill alt='لوگوی او پی تیم' />
                                </div>
                                <span className='w-full text-center font-extrabold text-xs lg:text-base text-[#00004E]'>برای سفارش سایت و ثبت درخواست لطفا وارد حساب کاربری خود شوید.</span>
                            </div>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Login;
