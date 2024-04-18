import React from 'react';
import Weblogheader from '../weblogHeader/weblogheader';
import Image from 'next/image';
import AnimateCircles from '../animatecircles';
function Websectionone() {
    return (
        <div className='w-full max-w-7xl my-10 mx-10 lg:p-2 lg:pb-0 relative'>
            <Weblogheader />
            <div className="grid grid-cols-1 gap-4 ">
                <div className="grid place-items-center">
                    <div className='w-full lg:w-[700px] lg:h-[400px] h-[400px] relative'>
                        <Image
                            src='/assets/images/weblog header/Rectangle 47 (1).png'
                            className='object-contain'
                            loading='lazy'
                            fill
                            alt='تصویر'
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className=" grid place-items-center">
                        <div className='w-full lg:w-[500px] lg:h-[300px] h-[300px]  relative'>
                            <Image
                                src='/assets/images/weblog header/Group 39.png'
                                className='object-contain'
                                loading='lazy'
                                fill
                                alt='تصویر'
                            />
                        </div>
                    </div>
                    <div className=" grid place-items-center">
                        <div className='w-full lg:w-[500px] lg:h-[300px] h-[300px] relative'>
                            <Image
                                src='/assets/images/weblog header/Group 40.png'
                                className='object-contain'
                                loading='lazy'
                                fill
                                alt='تصویر'
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='absolute top-1/3 right-1/3 '>
                    <AnimateCircles color={"#ECECFF"} />
                </div> */}
                <div className='absolute top-1/2 left-0'>
                    <AnimateCircles color={"#ECECFF"} />
                </div>
                <div className='absolute bottom-2 right-0'>
                    <AnimateCircles color={"#ECECFF"} />
                </div>
        </div>
    );
}

export default Websectionone;
