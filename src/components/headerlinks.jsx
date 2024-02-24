import React from 'react';
import Link from 'next/link'

const HeaderLinks = ({ data }) => {
    
    const linkData = data;

    return (
        <>
            {linkData.map(item => (
                <Link href={item.href}  key={item.name} className='p-3 font-extrabold text-sm text-indigo-950 cursor-pointer hover:text-indigo-800 transition-colors' >{item.name}</Link>
            ))}
        </>
    );
}

export default HeaderLinks;
