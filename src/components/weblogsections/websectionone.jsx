import React from 'react';
import Weblogheader from '../weblogHeader/weblogheader';
import Image from 'next/image';
import AnimateCircles from '../animatecircles';
import Weblogslider from '../weblogslider/weblogslider';

function Websectionone() {
    return (
        <div className='w-full max-w-7xl my-10 mx-10 lg:p-2 lg:pb-0 relative'>

            <Weblogheader />
            <div className="container mx-auto p-8">

                <div className="flex justify-center mb-8">
                    <div className="w-full lg:w-3/4">
                        <Weblogslider />
                    </div>
                </div>

                <div className="flex justify-center  flex-nowrap  ">
                    <div className="w-full lg:w-3/4 flex flex-col lg:flex-row justify-between">
                        <div className="w-full lg:w-1/2 mb-4 lg:mb-0 h-[300px] relative ">
                            <Image
                                src='/assets\images\weblog header\pankaj-patel-_SgRNwAVNKw-unsplash.jpg'
                                className='object-cover rounded-md pl-2'
                                layout='fill'
                                alt='تصویر'
                            />
                            <div className='absolute bottom-2 right-2 flex flex-col items-center space-x-4'>

                                <div className='flex flex-row'>
                                    <button type="button" class="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">بک اند </button>

                                    <button type="button" class="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">فرانت اند</button>

                                </div>

                                <div>
                                    <p className='text-white'>برنامه نویسی وب برنامه نویسی وب</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 h-[300px] relative">
                            <Image
                                src='/assets/images/weblog header/markus-spiske-cvBBO4PzWPg-unsplash.jpg'
                                className='object-cover rounded-md pr-2'
                                layout='fill'
                                alt='تصویر'
                            />

                            <div className='absolute bottom-2 right-2 flex flex-col items-center space-x-4'>

                                <div className='flex flex-row'>
                                    <button type="button" class="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">بک اند </button>

                                    <button type="button" class="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">فرانت اند</button>

                                </div>

                                <div>
                                    <p className='text-white'>برنامه نویسی وب برنامه نویسی وب</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className='absolute top-1/3 pt-32 '>
                <AnimateCircles color={"#ECECFF"} />
            </div>
            <div className='absolute top-1/2 left-0'>
                <AnimateCircles color={"#ECECFF"} />
            </div>
            <div className='absolute bottom-2 right-0'>
                <AnimateCircles color={"#ECECFF"} />
            </div> */}
        </div>
    );
}

export default Websectionone;
