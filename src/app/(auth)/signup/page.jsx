import React from 'react'
import Image from 'next/image'
import SignupForm from '@/components/authenticate/signup/signupform'
import Sidebar from '../../../components/authenticate/sidebar'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

const SignUp = async () => {

    const session = await auth();

    if (session) {
        redirect('/userpanel/account')
    }

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center p-2 lg:p-5 '>
                <div className='w-full max-w-7xl bg-[#DDE5FA] py-20 flex justify-center rounded-2xl mt-24'>
                    <div className='lg:w-3/4 w-full flex-col lg:flex-row flex justify-center items-center px-1 '>
                        <Sidebar />
                        <div className='lg:w-4/5 w-full bg-slate-100 rounded-3xl shadow-md shadow-gray-400 p-5 flex flex-col space-y-5 items-center z-20'>
                            <div className='flex w-full items-center space-x-4 space-x-reverse'>
                                <div className='sm:w-28 sm:h-20 w-20 h-10 relative overflow-hidden rounded-xl shadow-md shadow-gray-500'>
                                    <Image src='/assets/images/logo.png' className='object-cover w-full h-full' loading='lazy' width={500} height={500} alt='لوگوی او پی تیم' />
                                </div>
                                <span className='w-2/3 text-center font-extrabold text-xs sm:text-base text-[#00004E] self-center'>فرم ثبت نام در سایت</span>
                            </div>
                            <SignupForm />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp

