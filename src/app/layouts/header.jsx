import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { TbLogin } from "react-icons/tb";
import HeaderLinks from '@/components/headerlinks';
import ScrollLinks from '@/components/scrolllinks';


const Header = () => {

    const linkData = [
        {
            name: 'سفارش سایت',
            href: '/orderWebsite',
        },
    ]

    const scrollLinks = [
  
        {
            name: 'درباره ما',
            scrollHash:'aboutUs'
        },
        {
            name: 'پروژه‌های ما',
            scrollHash:'ourProjects'
        }
    ]
    
    
    

    return (
        <div className='w-full flex-col flex justify-center items-center p-5 relative'>
            
            <div className='w-full max-w-7xl bg-[#23243d] h-[70px] flex items-center rounded-r-xl rounded-l-2xl shadow-md z-10'>
                <Link href='/' className='w-1/12 overflow-hidden h-full bg-[#23243d] rounded-r-xl flex justify-center items-center'>
                    <Image src='/assets/images/logo.png' loading='lazy' width={100} height={100} alt='لوگوی او پی تیم' />
                </Link>
                <div className='w-11/12 bg-slate-100 h-full rounded-xl flex items-center justify-between'>
                    <div className='w-3/5 flex items-center space-x-4 space-x-reverse pr-10'>
                       <HeaderLinks data={linkData}/>
                       <ScrollLinks data={scrollLinks}/>
                    </div>
                    <div className='w-1/5 h-full flex justify-center items-center'>
                        <Link href='login' className='flex px-8 py-2 rounded-xl border shadow justify-center items-center space-x-2 space-x-reverse text-xs font-extrabold text-gray-400 group '>
                            <TbLogin className='text-xl group-hover:text-gray-600 transition-colors'/>
                            <span className='group-hover:text-gray-600 transition-colors'>ورود</span>
                            <span className='w-0.5 h-5 bg-gray-400 group-hover:bg-gray-600 transition-colors'></span>
                            <span className='group-hover:text-gray-600 transition-colors'>ثبت نام</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Link href='tel:09925616704' className='w-80 flex items-center justify-between bg-[#198BE852] z-0 p-3 text-indigo-950 text-xs font-extrabold rounded-b-3xl'>
                <span>تماس با ما</span>
                <span>09925616704</span>
            </Link>
        </div>
    );
}

export default Header;
