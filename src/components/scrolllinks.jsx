'use client'
import React from 'react';

const ScrollLinks = () => {
 
    const linkData = [
        {
            name: 'درباره ما',
            scrollHash: 'aboutUs'
        },
        {
            name: 'پروژه‌های ما',
            scrollHash: 'ourProjects'
        }
    ];


    const scrolltoHash = (element_id) => {
        const element = document.getElementById(element_id);
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    return (
        <>
            {linkData.map(item => (
                <span onClick={() => scrolltoHash(item.scrollHash)} key={item.name} className='p-3 font-extrabold sm:text-sm text-xs text-[#00004E] cursor-pointer hover:text-indigo-800 transition-colors'>{item.name}</span>
            ))}
        </>
    );
}

export default ScrollLinks;
