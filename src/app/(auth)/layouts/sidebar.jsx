import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
    return (
        <div className='w-1/5 flex flex-col justify-center items-center space-y-5'>
            <Link href='/login' className="text-slate-100 bg-blue-700 font-extrabold rounded-2xl w-[154px] h-[94px] shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 transition-colors ">ورود</Link>
            <Link href='/signup' className="text-indigo-950 bg-slate-100 font-extrabold rounded-2xl w-[154px] h-[94px] shadow-gray-400 shadow-md flex justify-center items-center hover:bg-blue-500 hover:text-white transition-colors ">ثبت نام</Link>
        </div>

    )
}

export default Sidebar