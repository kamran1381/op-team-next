'use client'
import React, {useState } from 'react';
import { TbLogin } from "react-icons/tb";
import { IoPersonSharp } from 'react-icons/io5';
import Link from 'next/link'
import Image from 'next/image'
import { isLogin } from '@/lib/actions';
import { useSession, getSession } from 'next-auth/react';

const LoginHeaderButton = () => {
    
    const { data: session, status } = useSession();
    console.log(status)

    return (
        <>
            {session ? (
                <div className="flex justify-center w-full h-full items-center">
                    <Link href="/userpanel/account" className="flex space-x-reverse space-x-1 items-center justify-center" >
                        <div className="max-w-48 text-xs text-nowrap border border-slate-300 rounded-md p-2 overflow-hidden sm:flex items-center hidden">
                            <span className="overflow-hidden text-slate-400">{`خوش آمدید `}</span>
                        </div>
                        <div className="inline-flex relative min-w-12 min-h-12 overflow-hidden justify-center rounded-full border-2 border-slate-400 bg-slate-100 shadow-sm ">
                        </div>
                    </Link>
                </div>
            ) : (
                <Link href='/login' className='w-full text-nowrap flex sm:px-8 sm:py-2 px-1 py-1 rounded-xl border shadow justify-center items-center space-x-2 space-x-reverse text-xs font-extrabold text-gray-400 group '>
                    <IoPersonSharp className='text-xl group-hover:text-gray-600 transition-colors sm:hidden' />
                    <TbLogin className='text-xl group-hover:text-gray-600 transition-colors hidden sm:block' />
                    <span className='group-hover:text-gray-600 transition-colors hidden sm:block'>ورود</span>
                    <span className='w-0.5 h-5 bg-gray-400 group-hover:bg-gray-600 transition-colors hidden sm:block'></span>
                    <span className='group-hover:text-gray-600 transition-colors hidden sm:block '>ثبت نام</span>
                </Link>
            )}
        </>
    );
}

export default LoginHeaderButton;
// {/* <Image src={user.image} width={50} height={50} className='rounded-md' alt='profile'/> */}
