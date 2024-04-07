import React from 'react';
import Image from 'next/image';

const Cardstars = () => {
    return (
        <>
            <Image src='/assets/images/star.png' className='object-contain' width={500} height={500} loading='lazy' alt='امتیاز' />
        </>
    );
}

export default Cardstars;
