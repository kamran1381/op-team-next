'use client'
// components/CommentSection.js
import { useState } from 'react';
import AddComment from './addcomment';
import Image from 'next/image';
const CommentSection = () => {

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
        <div className="lg:w-[85%] w-full mx-auto p-6 bg-white rounded-2xl  shadow-lg mt-10">
        <div>
            <div className='flex'>
                <span className='text-black opacity-25'>برخی از صحبت های شما</span>
            </div>

            <div className='py-4 flex justify-between gap-0'>
                {profilepics.map((item) => (
                    <div key={item.id} className="flex lg:flex-row items-center w-[21%] h-20 border border-[#5f6b69]/10 rounded-l-2xl  relative shadow-lg   overflow-hidden ">
                        <div className=' border-r-2  border-r-[#0045CE] h-full'></div>
                        <div className=" w-11 h-11 mr-2 relative mb-3  ">
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
               <AddComment/>

            </div>
            

        </div>
    </div>

    );
};

export default CommentSection;


