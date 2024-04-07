import React from 'react';
import Link from 'next/link'
import LoginWithGithub from './loginwithgithub';
import LoginWithGoogle from './loginwithgoogle';
import LoginWithUserInfo from './loginwithuserinfo';

const LoginForm = () => {



    return (
        <>
            <LoginWithUserInfo />
            <Link href='/forgotpassword' className='text-xs text-blue-500 hover:text-blue-600 transition-colors font-bold py-2'>رمز عبور خود را فراموش کرده‌اید؟</Link>
            {/* <div className='w-full relative pb-5'>
                <span className='border border-gray-300 rounded-full w-7 h-7 bg-slate-100 absolute left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center'>یا</span>
                <div className='w-full h-px bg-gray-300'></div>
            </div>
            <LoginWithGoogle />
            <LoginWithGithub /> */}
        </> 
    );
}

export default LoginForm;
