import React from 'react';
import Link from 'next/link'

const HeaderLinks = () => {
    
    const linkData = [
      
        {
            name: 'خانه',
            href: '/',
        },
      
        {
            name: 'سفارش سایت',
            href: '/userpanel/orders',
        },
     
        {
            name : 'وبلاگ' ,
            href : '/weblog'
           },
    ];


    return (
        <>
            {linkData.map(item => (
                <Link href={item.href}  key={item.name} className='p-3 font-extrabold sm:text-sm text-xs text-[#00004E] cursor-pointer hover:text-indigo-800 transition-colors' >{item.name}</Link>
            ))}
        </>
    );
}

export default HeaderLinks;
