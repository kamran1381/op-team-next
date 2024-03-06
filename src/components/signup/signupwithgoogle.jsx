import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SignupWithGoogle = () => {
    return (
        <form className='sm:w-2/3 w-full' action="">
            <button className='w-full sm:text-base text-xs p-3 rounded-3xl bg-rose-500 flex justify-center items-center space-x-reverse space-x-5 border text-white hover:bg-rose-400 transition-colors'>
                <span>ثبت نام با استفاده از گوگل</span>
                <FaGoogle className='text-xl' />
            </button>
        </form>
    );
}

export default SignupWithGoogle;
