import React from 'react';
import Image from 'next/image'
import { TbLogin } from "react-icons/tb";


const Header = () => {

    const linkData = [
        {
            name: 'سفارش سایت',
            href: '/orderWebsite'
        },
        {
            name: 'درباره ما',
            href: '/aboutUs'
        },
        {
            name: 'پروژه‌های ما',
            href: '/ourProjects'
        }
    ]

    return (
        <div className='w-full flex-col flex justify-center items-center p-5 relative'>
            <div className='w-full max-w-7xl bg-[#23243d] h-[70px] flex items-center rounded-r-xl rounded-l-2xl shadow-md z-10'>
                <div className='w-1/12 overflow-hidden h-full bg-[#23243d] rounded-r-xl flex justify-center items-center'>
                    <Image src='/assets/images/logo.png' width={100} height={100} alt='لوگوی او پی تیم' />
                </div>
                <div className='w-11/12 bg-slate-100 h-full rounded-xl flex items-center justify-between'>
                    <div className='w-2/5 flex items-center justify-between pr-10'>
                        {linkData.map(item => (
                            <a className='p-3 font-extrabold text-sm text-indigo-950' href={item.href}>{item.name}</a>
                        ))}
                    </div>
                    <div className='w-1/5 h-full flex justify-center items-center'>
                        <a href='login' className='flex px-8 py-2 rounded-xl border shadow justify-center items-center space-x-2 space-x-reverse text-xs font-extrabold text-gray-400'>
                            <TbLogin className='text-xl'/>
                            <span>ورود</span>
                            <span className='w-0.5 h-5 bg-gray-400'></span>
                            <span>ثبت نام</span>
                        </a>
                    </div>
                </div>
            </div>
            <a href='tel:09925616704' className='w-1/5 flex items-center justify-between bg-[#198BE852] z-0 p-3 text-indigo-950 text-xs font-extrabold rounded-b-3xl'>
                <span>تماس با ما</span>
                <span>09925616704</span>
            </a>
        </div>
    );
}

export default Header;
