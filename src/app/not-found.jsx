import React from 'react'
import Link from 'next/link';

const NotFound = () => {
    return (

        <div className='w-full flex flex-col justify-center items-center p-5 relative'>
            <div className='w-full max-w-7xl bg-[#DDE5FA] h-screen flex justify-center rounded-2xl'>
                <main class='flex items-center justify-center w-full min-h-screen py-8 text-gray-900 page md:py-16 '>
                    <div class='relative flex flex-col items-center w-full gap-8 px-8 '>
                        <h1 class='text-9xl md:text-[300px] w-full select-none  text-center font-black  text-gray-400 dark:text-[#373A40]  '>404</h1>

                        <p class='text-3xl font-bold capitalize text-center'>شما به یکجای مخفی امده اید </p>
                        <p class='text-2xl font-medium break-words text-center w-full'>متاسفانه صفحه مورد نظر شما پیدا نشد شاید مجبور باشید که به یک صفحه  دیگر بروید </p>
                        <div class='flex flex-col justify-between w-full gap-8 md:flex-row md:gap-32 xl:px-16'>
                            <Link href="/" class='flex items-center justify-center w-full gap-4 p-3 font-semibold capitalize border-2 border-blue-500 rounded shadow-lg md:w-fit hover:bg-blue-500 hover:text-slate-100 md:p-6 focus:outline-none hover:scale-105 active:scale-90 hover:shadow-xl '>
                                به صفحه قبل برگردین
                            </Link>
                            <Link href="/" class='flex items-center justify-center w-full gap-4 p-3 font-semibold capitalize border-2 border-blue-500 rounded shadow-lg md:w-fit hover:bg-blue-500 hover:text-slate-100 md:p-6 focus:outline-none hover:scale-105 active:scale-90 hover:shadow-xl '>
                                به خانه برگردین
                            </Link>

                        </div>
                    </div>
                </main>
            </div>

        </div>
    );
}

export default NotFound;
