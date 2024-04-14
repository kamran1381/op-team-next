'use client'
import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import { FaLinkedinIn, FaStar } from "react-icons/fa";
import Link from 'next/link'
import { IoPersonSharp } from "react-icons/io5";
import Image from 'next/image'
import Instagram from './icons/instagram';
import Cardstars from './icons/cardstars';
import { toast } from 'sonner';


const Card = () => {

    const [cartsData, setCartsData] = useState()

    useEffect(() => {
        try {
            axios.get('/sanctum/csrf-cookie').then(async () => {
                const response = await axios.get('api/carts/show');
                if (response.status === 200) {
                    // Handle response if necessary
                    setCartsData(response.data)
                }
            })
        } catch (error) {
            toast(error, {
                classNames: {
                    toast: 'text-red-600',
                },
            });
        }

    }, [])


    const starCounts = 4;

    return (
        <>


            {
                cartsData ? (
                    cartsData?.map((item, index) => (
                        <div key={index} className='w-72 h-[452px] bg-blue-700 rounded-3xl p-5 flex flex-col justify-between overflow-hidden relative'>
                            <div className='absolute w-full h-full top-0 right-0 z-0'>
                                <div className='absolute w-36 h-36 rounded-3xl bg-blue-600 border border-blue-500 left-0 top-10 rotate-45 z-10'></div>
                                <div className='absolute w-36 h-36 rounded-3xl bg-blue-600 border border-blue-500 shadow left-8 top-1/2 -translate-y-1/2 rotate-45 z-20'></div>
                                <div className='absolute w-36 h-36 rounded-3xl bg-blue-600 border border-blue-500 left-0 bottom-10 rotate-45 z-10'></div>
                            </div>
                            <div className='w-full flex items-center justify-between z-10'>
                                <div className='flex flex-col space-y-2'>
                                    <span className='lg:text-2xl text-xl font-extrabold text-white'>
                                        {item.name}
                                    </span>
                                    <span className='text-xs font-bold text-white'>
                                        {item.title}
                                    </span>
                                    <span className='w-7 h-1 bg-white rounded-full'></span>
                                </div>
                                <div className='w-20 h-20 bg-white rounded-2xl flex justify-center items-center relative overflow-hidden'>
                                    {
                                        item.pic ?
                                            <Image src={`${process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL}/${item.pic}`} width={500} height={500} className='aspect-square object-cover' alt='تصویر' priority />
                                            :
                                            <IoPersonSharp size={50} className="text-[#7986A4]" />
                                    }
                                </div>
                            </div>
                            <p className='font-bold text-white text-sm lg:text-base leading-8 text-justify z-10'>
                                {item.description}
                            </p>
                            <div className='w-10 h-fit bg-[#0000003c] rounded-full flex flex-col items-center py-3 space-y-5 z-10'>
                                <Link href={item.linkinsageram || '/'} className="flex items-center justify-center">
                                    <Instagram width={21} height={23} />
                                </Link>
                                <Link href={item.linkedin || '/'} className="flex items-center justify-center rotate-90">
                                    <FaLinkedinIn className='text-xl text-white hover:text-gray-400 transition-colors' />
                                </Link>

                            </div>
                            <div className='w-full flex justify-between self-end items-center z-10'>
                                <div className='flex items-center space-x-1 space-x-reverse text-yellow-500'>
                                    {[...Array(starCounts)].map((_, i) => (
                                        <div key={i} className='h-5 w-5'>
                                            <Cardstars />
                                        </div>
                                    ))}
                                </div>
                                <Link href={`CV/${item.id || index}`} className='w-1/2 py-1 bg-gradient-to-b from-[#40c9cd] to-[#1D1D99] to-80% rounded-xl shadow-[0px_0px_8px_0px] shadow-gray-800 outline-none text-slate-100 transition-colors flex justify-center items-center'>رزومه</Link>
                            </div>
                        </div>
                    ))) : (
                    <div className='w-full flex justify-center items-center'>
                        <span className='font-bold text-xl text-gray-500'>
                            در حال حاضر اطلاعاتی برای نمایش وجود ندارد
                        </span>
                    </div>
                )
            }
        </>
    );
}

export default Card;
