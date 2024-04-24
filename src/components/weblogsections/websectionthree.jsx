import React from 'react';
import Image from 'next/image';
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
        <div className='container'>
            <div className="border-t-2 border-slate-600 mx-28"></div>

            <div className="lg:w-3/4  mx-auto p-6 bg-white rounded-md shadow-md mt-5">
                <div>
                    <span className='text-right'>برخی از صحبت های شما</span>

                    <div className='py-4 flex justify-between gap-2'>
                        {profilepics.map((item) => (
                            <div key={item.id} className=" flex items-center w-1/4 h-20 bg-gray-200 rounded-md relative   overflow-hidden ">
                                <div className=" w-14 h-14 mr-2 relative  ">
                                    <Image
                                        src={item.imageUrl}
                                        className='object-cover rounded-full'
                                        layout='fill'
                                        alt='Post Image'
                                    />
                                </div>
                                <div className='px-2'>
                                    <span className='text-sm'>{item.title}</span>

                                </div>
                                <div className='absolute bottom-0 left-1'>
                                    <span className='text-xs text-slate-500'>بیشتر...</span>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="py-4">
                        <hr />
                    </div>
                    <div className="flex  py-4">
                        <div className='lg:w-1/5 h-20 flex items-center bg-gray-200 rounded-md '>
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
                        <div className='lg:w-4/5 relative pr-3 flex items-center'>

                            <input
                                type="text"
                                id="inputField"
                                name="inputField"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                                placeholder="سوال یا نظری وارد کنید..."
                            />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Websectionthree;
