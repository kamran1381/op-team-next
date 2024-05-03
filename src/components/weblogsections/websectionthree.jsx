import React from 'react';
import Image from 'next/image';
import Inputsendicon from '../icons/inputsendicon';
function Websectionthree() {
    const profilepics = [
        {
            id: 1,
            title: "ببخشید من مشکل...",
            imageUrl: "/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg" // Example image URL
        },
        {
            id: 2,
            title: "ببخشید من مشکل...",
            imageUrl: "/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg" // Example image URL
        },
        {
            id: 3,
            title: "ببخشید من مشکل...",
            imageUrl: "/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg" // Example image URL
        },
        {
            id: 4,
            title: "ببخشید من مشکل...",
            imageUrl: "/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg" // Example image URL
        },
    ];

    return (
        <div className='container '>
            <div className="border-t-2 border-x-slate-700 mx-20 mt-6"></div>

            <div className="lg:w-[85%] w-full mx-auto p-6 bg-white rounded-md shadow-md mt-10">
                <div>
                    <div className='flex'>
                        <span className='text-black opacity-25'>برخی از صحبت های شما</span>
                    </div>

                    <div className='py-4 flex justify-between gap-2'>
                        {profilepics.map((item) => (
                            <div key={item.id} className="flex lg:flex-row items-center w-1/4 h-20 border border-[#5f6b69]/50 rounded-l-2xl  relative   overflow-hidden ">
                                <div className=' border-r-2  border-r-[#0045CE] h-full'></div>
                                <div className=" w-14 h-14 mr-2 relative mb-3  ">
                                    <Image
                                        src={item.imageUrl}
                                        className='object-cover rounded-full '
                                        layout='fill'
                                        alt='Post Image'
                                    />
                                </div>
                                <div className='px-2 pb-3'>
                                    <span className='text-sm text-bold'>{item.title}</span>


                                </div>
                                <div className='absolute bottom-0 left-1'>
                                    <span className='text-xs text-slate-500'>بیشتر...</span>

                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="py-4">
                        <hr />
                    </div>
                    <div className="flex  py-4">
                        <div className='lg:w-1/5 h-20 flex items-center border border-[#5f6b69]/50  bg-white rounded-l-2xl '>
                        <div className=' border-r-2  border-r-[#0045CE] h-full'></div>

                            <div className=" w-14 h-14 mr-2   relative  ">
                            
                                <Image
                                    src={profilepics[0].imageUrl}
                                    className='object-cover rounded-full'
                                    layout='fill'
                                    alt='Post Image'
                                />
                            </div>
                            <span className='pr-3'>fearles x</span>
                        </div>
                        <div className='lg:w-4/5 relative pr-3 flex items-center '>

                            <input
                                type="text"
                                id="inputField"
                                name="inputField"
                                className="w-full px-4 py-4 border rounded-md focus:outline-none focus:border-blue-400 border-r-2  border-r-[#0045CE] "
                                placeholder="سوال یا نظری وارد کنید..."
                            />
                             
                             <div className='absolute top-6 left-3'>
                             <Inputsendicon />

                             </div>


                        </div>


                    </div>

                </div>
            </div>







            <div class="flex flex-col lg:flex-row">
                <div class="w-full lg:w-1/2">
                    <div class="py-2">
                        <div class="flex flex-col items-center space-y-2">
                            {profilepics.map((item) => (
                                <div key={item.id} className="flex items-center w-full lg:w-2/4 h-28 bg-slate-50 rounded-md relative overflow-hidden">
                                    <div className="w-14 h-14 mr-2 relative">
                                        <Image
                                            src={item.imageUrl}
                                            className="object-cover rounded-full"
                                            layout="fill"
                                            alt="Profile Image"
                                        />
                                    </div>
                                    <div className="px-2 flex-grow">
                                        <span className="text-sm">{item.title}</span>
                                    </div>
                                    <div className="absolute bottom-0 left-1 flex items-center space-x-2">
                                        <span className="text-xs text-slate-500 px-2">بیشتر...</span>
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            <span className="text-xs">پاسخ</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div class="w-full lg:w-1/2">
                    <div class="py-2">
                        <div class="flex flex-col items-start space-y-2">
                            <div class="flex items-center w-full lg:w-2/4 h-28 bg-slate-50 rounded-md relative overflow-hidden">
                                <div class="w-14 h-14 mr-2 relative">
                                    <img
                                        src="/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg"
                                        class="object-cover "
                                        alt="Profile Image"
                                    />
                                </div>
                                <div class="px-2">
                                    <span class="text-sm">{profilepics[0].title}</span>
                                </div>
                            </div>
                            <div class=" items-center w-full lg:w-2/4 bg-slate-50 rounded-md mt-2 p-2 hidden">
                                <input
                                    type="text"
                                    id="inputField"
                                    name="inputField"
                                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                                    placeholder="سوال یا نظری وارد کنید..."
                                />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Websectionthree;
