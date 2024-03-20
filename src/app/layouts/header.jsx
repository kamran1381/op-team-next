import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import HeaderLinks from '@/components/headerlinks';
import ScrollLinks from '@/components/scrolllinks';
import { IoPersonSharp } from 'react-icons/io5';
import LoginHeaderButton from '@/components/header/loginheaderbutton';
import { FaChevronDown } from 'react-icons/fa';
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
            scrollHash: 'aboutUs'
        },
        {
            name: 'پروژه‌های ما',
            scrollHash: 'ourProjects'
        }
    ]




    return (
        <div className='w-full flex-col flex justify-center items-center py-5 lg:px-5 px-2 relative'>
            <div className="w-full lg:hidden flex items-center justify-start space-x-2 space-x-reverse pb-3">
                <Link href='/' className=' overflow-hidden h-full bg-[#23243d] rounded-xl flex justify-center items-center'>
                    <Image src='/assets/images/logo.png' loading='lazy' width={70} height={70} alt='لوگوی او پی تیم' />
                </Link>
                <span className="text-indigo-900 text-lg font-extrabold">او پی تیم</span>
            </div>
            <div className='w-full max-w-7xl bg-[#23243d] h-[70px] flex items-center rounded-r-xl rounded-l-2xl shadow-md z-10'>
                <Link href='/' className='lg:w-1/12 overflow-hidden h-full bg-[#23243d] rounded-r-xl hidden lg:flex justify-center items-center'>
                    <Image src='/assets/images/logo.png' loading='lazy' width={100} height={100} alt='لوگوی او پی تیم' />
                </Link>
                <div className='lg:w-11/12 w-full bg-slate-100 h-full rounded-xl flex items-center justify-between'>
                    <div className=' w-full flex items-center lg:space-x-4 lg:space-x-reverse lg:pr-10'>
                        <HeaderLinks data={linkData} />
                        <ScrollLinks data={scrollLinks} />
                    </div>
                    <div className='w-fit h-full flex lg:justify-center justify-end items-center sm:pl-8 pl-2'>
                        <LoginHeaderButton />
                    </div>
                </div>
            </div>
            <Link href='tel:09925616704' className='sm:w-80 w-52 flex flex-col space-y-2 items-center  bg-[#198BE852] z-0 px-3 pt-2 pb-1 text-indigo-950 text-xs font-extrabold rounded-b-3xl -translate-y-7 hover:translate-y-0 transition-transform'>
                <div className='flex items-center justify-between w-full'>
                    <span>تماس با ما</span>
                    <span>09925616704</span>
                </div>
                <FaChevronDown size={20}/>
            </Link>
        </div>
    );
}

export default Header;
