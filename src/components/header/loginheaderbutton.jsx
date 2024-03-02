
import React from 'react';
import { TbLogin } from "react-icons/tb";
import { IoPersonSharp } from 'react-icons/io5';
import Link from 'next/link'
import { auth } from '@/lib/auth';
import UserPanelButton from './userpanelbutton';


const LoginHeaderButton = async () => {
    const session = await auth();

    return (
        <>
            {session ?


                <UserPanelButton user={session.user} />


                :
                <Link href='/login' className='w-full text-nowrap flex sm:px-8 sm:py-2 px-1 py-1  rounded-xl border shadow justify-center items-center space-x-2 space-x-reverse text-xs font-extrabold text-gray-400 group '>
                    <IoPersonSharp className='text-xl group-hover:text-gray-600 transition-colors sm:hidden' />
                    <TbLogin className='text-xl group-hover:text-gray-600 transition-colors hidden sm:block' />
                    <span className='group-hover:text-gray-600 transition-colors hidden sm:block'>ورود</span>
                    <span className='w-0.5 h-5 bg-gray-400 group-hover:bg-gray-600 transition-colors hidden sm:block'></span>
                    <span className='group-hover:text-gray-600 transition-colors hidden sm:block '>ثبت نام</span>
                </Link>
            }
        </>
    );
}

export default LoginHeaderButton;
