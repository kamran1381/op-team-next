import { handleGithubLogin } from '@/lib/actions';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const LoginWithGithub = async() => {


    return (
        <form className='sm:w-2/3 w-full' action={handleGithubLogin}>
            <button className='w-full sm:text-base text-xs p-3 rounded-3xl bg-slate-900 flex justify-center items-center space-x-reverse space-x-5 text-white hover:bg-slate-800 transition-colors'>
                <span>ورود با استفاده از گیت هاب</span>
                <FaGithub className='text-xl' />
            </button>
        </form>
    );
}

export default LoginWithGithub;
