import React from 'react';
import Link from 'next/link';

const LoginFirst = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center p-5 relative'>
        <div className='w-full max-w-7xl bg-[#DDE5FA] flex justify-center rounded-2xl'>
            <main className='flex items-center justify-center w-full min-h-screen py-8 text-gray-900 page md:py-16 '>
                <div className='relative flex flex-col items-center w-full gap-8 px-8 '>
                    <h1 className='md:text-6xl text-3xl w-full select-none  text-center font-extrabold  text-gray-400 dark:text-[#373A40]  '>لطفا ابتدا وارد سایت شوید و یا ثبت نام کنید</h1>

                    <p className='text-3xl font-bold capitalize text-center'>دسترسی به این صفحه نیاز به عضویت دارد</p>
                    <p className='text-2xl font-medium break-words text-center w-full'> شاید مجبور باشید که به یکی از صفحات زیر بروید </p>
                    <div className='flex flex-col justify-between w-full gap-8 md:flex-row md:gap-32 xl:px-16'>
                        <Link href="/login" className='flex items-center justify-center w-full gap-4 p-3 font-semibold capitalize border-2 border-blue-500 rounded shadow-lg md:w-fit hover:bg-blue-500 hover:text-slate-100 md:p-6 focus:outline-none hover:scale-105 active:scale-90 hover:shadow-xl '>
                            به صفحه ورود بروید
                        </Link>
                        <Link href="/signup" className='flex items-center justify-center w-full gap-4 p-3 font-semibold capitalize border-2 border-blue-500 rounded shadow-lg md:w-fit hover:bg-blue-500 hover:text-slate-100 md:p-6 focus:outline-none hover:scale-105 active:scale-90 hover:shadow-xl '>
                            به صفحه ثبت نام
                        </Link>

                    </div>
                </div>
            </main>
        </div>

    </div>
    );
}

export default LoginFirst;
