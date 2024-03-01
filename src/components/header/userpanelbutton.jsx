'use client'
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const UserPanelButton = (props) => {
    return (
        <>
            <div className="flex justify-center w-full h-full items-center">
                <Link href="/userpanel/account" className="inline-flex relative overflow-hidden w-12 h-12 justify-center rounded-full border-2 border-slate-400 bg-slate-100 shadow-sm  " >
                    <Image src={props.image} fill/>
                </Link>
            </div>
        </>
    );
}

export default UserPanelButton;
