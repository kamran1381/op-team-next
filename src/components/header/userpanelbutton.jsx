'use client'
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
const UserPanelButton = ({ user }) => {
    return (
        <>
            <div className="flex justify-center w-full h-full items-center">
                <Link href="/userpanel/account" className="flex space-x-reverse space-x-1 items-center justify-center" >
                    <div className="max-w-48 text-xs text-nowrap border border-slate-300 rounded-md p-2 overflow-hidden sm:flex items-center relative hidden">
                        <span className="overflow-hidden text-slate-400">{`${user.name} خوش آمدید `}</span>
                        <div className='w-2 h-full bg-slate-100 absolute z-10 left-0 shadow-[0px_0px_12px_15px_#f1f5f9]'></div>
                    </div>
                    <div className="inline-flex relative min-w-12 min-h-12 overflow-hidden justify-center rounded-full border-2 border-slate-400 bg-slate-100 shadow-sm ">
                        <Image src={user.image} width={50} height={50} className='rounded-md' />
                    </div>
                </Link>
            </div>
        </>
    );
}

export default UserPanelButton;
