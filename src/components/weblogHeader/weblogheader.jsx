'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function Weblogheader() {
    const webheader = [
        {
            name: ' بک اند',
            href: ''
        },
        {
            name: 'فرانت اند',
            href: '/weblog/category'
        },
        {
            name: 'طراحی Uiux',
            href: '/weblog/category'
        },
        {
            name: ' پرسش و پاسخ',
            href: '/weblog/category'
        },
    ];
    
    const [clickedIndex, setClickedIndex] = useState(null);

    const linkClickHandler = (index) => {
        setClickedIndex(index); 
    }

    return (
        <div className='lg:pt-28  pt-28'>
            <div className='flex'>
                <button type="button" className=" bg-[#DCE8FF] focus:outline-none focus:ring-4 shadow-md rounded-full text-sm px-7 py-2.5 text-center me-2 mb-2">  
                  <span className='text-base/4 text-[#00004E] '>برو به...</span>
                 </button>
            </div>
            <div className='flex gap-2'>
                {webheader.map((items, index) => (
                    <Link onClick={() => linkClickHandler(index)} href={items.href} key={index} className={`text-white bg-${clickedIndex === index ? 'white' : 'blue-700'}  font-medium rounded-lg shadow-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        <span className={`lg:text-base/3 text-sm ${clickedIndex === index ? 'text-[#00004E]' : 'text-white'} font-semibold`}>{items.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Weblogheader;
