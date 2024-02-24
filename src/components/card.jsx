import React from 'react';
import { FaLinkedinIn, FaStar } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import Link from 'next/link'
import { IoPersonSharp } from "react-icons/io5";


const Card = ({ data }) => {
    const CardData = data;

    return (
        <>
            {
                CardData.map((item) => (
                    <div key={item.userId} className='w-72 h-[452px] bg-blue-700 rounded-3xl p-5 flex flex-col justify-between overflow-hidden relative'>
                        <div className='absolute w-full h-full top-0 right-0 z-0'>
                            <div className='absolute w-36 h-36 rounded-3xl bg-blue-600 border border-blue-500 left-0 top-10 rotate-45 z-10'></div>
                            <div className='absolute w-36 h-36 rounded-3xl bg-blue-600 border border-blue-500 shadow left-8 top-1/2 -translate-y-1/2 rotate-45 z-20'></div>
                            <div className='absolute w-36 h-36 rounded-3xl bg-blue-600 border border-blue-500 left-0 bottom-10 rotate-45 z-10'></div>
                        </div>
                        <div className='w-full flex items-center justify-between z-10'>
                            <div className='flex flex-col space-y-2'>
                                <span className='text-2xl font-extrabold text-white'>{item.name}</span>
                                <span className='text-xs font-bold text-white'>{item.role}</span>
                                <span className='w-7 h-1 bg-white rounded-full'></span>
                            </div>
                            <div className='w-20 h-20 bg-white rounded-2xl flex justify-center items-center'>
                                {/* {item.image } */}
                                <IoPersonSharp size={50} className="text-slate-400"/>
                            </div>
                        </div>
                        <p className='font-bold text-white leading-8 text-justify z-10'>
                            {item.description}
                        </p>
                        <div className='w-8 h-fit bg-[#0000003c] rounded-full flex flex-col items-center py-3 space-y-5 z-10'>
                            <Link href={item.instagramAddress} className="flex items-center justify-center">
                                <PiInstagramLogoFill className='text-xl text-white hover:text-gray-400 transition-colors' />
                            </Link>
                            <Link href={item.linkedinAddress} className="flex items-center justify-center">
                                <FaLinkedinIn className='text-xl text-white hover:text-gray-400 transition-colors' />
                            </Link>

                        </div>
                        <div className='w-full flex justify-between self-end items-center z-10'>
                            <div className='flex items-center space-x-1 space-x-reverse text-yellow-500'>
                                <FaStar /> {item.starsCount}
                            </div>
                            <Link href={`CV/${item.userId}`} className='w-1/3 py-1 bg-white rounded-2xl shadow shadow-gray-600 outline-none hover:bg-slate-200 transition-colors flex justify-center items-center'>رزومه</Link>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default Card;
