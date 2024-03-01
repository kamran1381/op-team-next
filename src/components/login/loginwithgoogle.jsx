import React from 'react';
import { signIn } from '@/lib/auth';
import { FaGoogle } from 'react-icons/fa';

const LoginWithGoogle = async () => {

    const handleGoogleLogin = async () => {
        'use server';
        await signIn("google")
    }

    return (
        <form className='sm:w-2/3 w-full' action={handleGoogleLogin}>
            <button className='w-full sm:text-base text-xs p-3 rounded-3xl bg-rose-500 flex justify-center items-center space-x-reverse space-x-5 border text-white hover:bg-rose-400 transition-colors'>
                <span>ورود با استفاده از گوگل</span>
                <FaGoogle className='text-xl' />
            </button>
        </form>
    );
}

export default LoginWithGoogle;
