'use client'
import React from 'react';
import { TbLogin } from "react-icons/tb";
import { IoPersonSharp } from 'react-icons/io5';
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react';

const LoginHeaderButton = () => {

    const { data: session, status } = useSession();

    return (
        <>
            {status === 'loading' ? (
                <div role="status">
                    <svg aria-hidden="true" className="w-5 h-5 text-[#DDE5FA] animate-spin fill-blue-500" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg"> {/* Spinner size increased and color changed to red */}
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                </div>
            )
                :
                session ? (
                    <div className="flex justify-center w-full h-full items-center">
                        <Link href="/userpanel/account" className="flex space-x-reverse space-x-1 items-center justify-center" >
                            <div className="max-w-48 text-xs text-nowrap border border-slate-300 rounded-md p-2 overflow-hidden sm:flex items-center hidden">
                                <span className="overflow-hidden text-[#7986A4]">{`خوش آمدید ${session.user.name}`}</span>
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
