import React from 'react';
import Weblogheader from '../weblogHeader/weblogheader';
import Image from 'next/image';
import AnimateCircles from '../animatecircles';
import Weblogslider from '../weblogslider/weblogslider';
import Webtwoslider from '../weblogslider/webtwolsider';
function Websectionone() {
    return (
        <div className=' w-full max-w-7xl my-10  lg:p-2 lg:pb-0 relative'>

            <div className="  w-full space-y-3 p-5 z-2">

                <div className="flex justify-center mb-8">
                    <div className="w-full lg:w-3/4">
                        <Weblogslider />
                    </div>
                </div>

                <div className="flex justify-center  flex-nowrap  ">
                    <div className="w-full lg:w-3/4 flex flex-col lg:flex-row justify-between gap-3">
                        <div className=" lg:w-1/2 mb-4 lg:mb-0  relative  ">
                        <div className='lg:w-[100%] lg:h-[300px]  w-[100%] h-[300px]  '>
                       
                            <Webtwoslider/>
                        </div>
                        
                        </div>
                        <div className=" lg:w-1/2 relative">
                         <div className='lg:w-[100%] lg:h-[300px]  w-[100%] h-[300px] relative'>
                           <Webtwoslider/>
                         </div>
                            
                        </div>
                    </div>
                </div>

            </div>
{/* 
            <div className='absolute bottom-1/3 right-3 py-24'>
                <AnimateCircles color={"#ECECFF"} />
            </div>
            <div className='absolute bottom-2/3 left-20 py-24 '>
                <AnimateCircles color={"#ECECFF"} />
            </div>
            <div className='absolute bottom-60 left-16 py-36'>
                <AnimateCircles color={"#ECECFF"} />
            </div> */}
        </div>
    );
}

export default Websectionone;
