'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderLinks from '@/components/headerlinks';
import ScrollLinks from '@/components/scrolllinks';
import LoginHeaderButton from '@/components/header/loginheaderbutton';
import { FaChevronDown } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Header = () => {


    const url = usePathname();

    return (
        <div className='w-full flex-col flex justify-center items-center py-5 lg:px-5 px-2 fixed z-50'>
           
            {/* <div className='w-full max-w-7xl bg-[#23243d] h-[70px] flex items-center rounded-r-xl rounded-l-2xl shadow-md '>
                <Link href='/' className='lg:w-1/12 overflow-hidden h-full bg-[#23243d] rounded-r-xl hidden lg:flex justify-center items-center'>
                    <Image src='/assets/images/logo.png' loading='lazy' width={100} height={100} alt='لوگوی او پی تیم' />
                </Link>
                <div className='lg:w-11/12 w-full bg-[#FFFFFF] h-full rounded-xl flex items-center justify-between z-10'>
                    <div className=' w-full flex items-center lg:space-x-4 lg:space-x-reverse lg:pr-10'>
                    {url=='/' ? <ScrollLinks /> : null}

                        <HeaderLinks />
                    </div>
                    <div className='w-fit h-full flex lg:justify-center justify-end items-center sm:pl-8 pl-2'>
                        <LoginHeaderButton />
                    </div>
                </div>
            </div> */}
            {/* <div className='sm:w-80 w-52 flex flex-col space-y-2 items-center bg-[#85c8ff] z-0 px-3 pt-2 pb-1 text-[#00004E] text-xs font-extrabold rounded-b-3xl -translate-y-7 hover:translate-y-0 transition-transform '>
                <Link href='tel:09925616704'  className='flex items-center justify-between w-full'>
                    <span>تماس با ما</span>
                    <span>09925616704</span>
                </Link>
                <FaChevronDown size={15}/>
            </div> */}
        </div>
    );
}

export default Header;