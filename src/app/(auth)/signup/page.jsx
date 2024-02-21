import React from 'react'
import Image from 'next/image'
import Signupform from '@/components/signupform'
const Signup = () => {
    return (
        <>
            <div>
                <div className='w-full flex flex-col justify-center items-center p-5 relative'>
                    <div className='w-full max-w-7xl bg-[#DDE5FA] h-screen flex justify-center rounded-2xl'>
                        <div className='w-3/4 flex justify-center items-center space-x-3 space-x-reverse' >

                            <div className='w-1/5 flex-col justify-center items-center space-y-3'>

                                <button type="button" className="text-slate-100 bg-blue-700 font-extrabold rounded-2xl w-[154px] h-[94px] shadow-gray-400 shadow-md text-center ">ثبت نام</button>
                                <button type="button" className="text-indigo-950 bg-slate-100 font-extrabold rounded-2xl w-[154px] h-[94px] shadow-gray-400 shadow-md text-center ">ورود</button>
                            </div>

                            <div className='w-4/5 bg-slate-100 rounded-3xl shadow-md shadow-gray-400 p-5 flex flex-col space-y-5 items-center'>
                                <div className='flex w-full items-center'>
                                    <div className='w-20 h-12 relative overflow-hidden rounded-xl shadow-md shadow-gray-500'>
                                        <Image src='/assets/images/logo.png' className='object-cover' loading='lazy' fill alt='لوگوی او پی تیم' />
                                    </div>
                                    <span className='w-full text-center font-extrabold text-indigo-950'>برای سفارش سایت و ثبت درخواست لطفا وارد حساب کاربری خود شوید.</span>
                                </div>
                                
                                    <Signupform/>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup