import React from 'react';
import Sidebar from '../../../components/dashboard/sidebar';
import Allcardstable from '@/components/dashboard/cardshandle/allcardstable';
import { FaPlusCircle } from 'react-icons/fa';
import Link from 'next/link';

const AllCards = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center p-2 lg:p-5'>
            <div className='w-full max-w-7xl bg-[#DDE5FA] py-20 flex justify-center rounded-2xl mt-24'>
                <div className='sm:w-3/4 w-full flex-col lg:flex-row flex justify-center items-center lg:space-x-3 lg:space-x-reverse px-1 space-y-3 lg:space-y-0 '>
                    <Sidebar />

                    <div className='lg:w-4/5 w-full rounded-3xl  p-5 flex flex-col space-y-5 items-center'>
                        <div className='py-2 flex w-full justify-between items-center'>
                            <h2 className='text-md sm:text-lg font-bold'>کارت‌ها</h2>
                            <Link href='cards/addcard' className='text-sm text-slate-100 font-bold bg-green-500 rounded-md p-2 flex items-center space-x-2 space-x-reverse'>
                                <span>افزودن کارت جدید</span>
                                <FaPlusCircle />
                            </Link>
                        </div>
                        <Allcardstable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllCards;
