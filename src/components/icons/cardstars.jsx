import React from 'react';
import Image from 'next/image';

const Cardstars = () => {
    return (
        <div>
            <Image src='/assets/images/star.png' width={15} height={15} loading='lazy'  alt='امتیاز' />
        </div>
    );
}

export default Cardstars;
