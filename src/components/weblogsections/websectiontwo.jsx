"use client"
import React from 'react';
import Image from 'next/image';
import AnimateCircles from '../animatecircles';
const Websectiontwo = () => {
    // Sample data for posts
    const posts = [
        {
            id: 1,
            title: "وب در روز های اخیر",
            Date: "فروردین 1 1403",
            imageUrl: "/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg" // Example image URL
        },
        {
            id: 2,
            title: "وب در روز های اخیر",
            Date: "فروردین 1 1403",
            imageUrl: "/assets/images/weblog header/joshua-aragon-EaB4Ml7C7fE-unsplash.jpg" // Example image URL
        },
        {
            id: 3,
            title: "وب در روز های اخیر",
            Date: "فروردین 1 1403",
            imageUrl: "/assets/images/weblog header/markus-spiske-cvBBO4PzWPg-unsplash.jpg" // Example image URL
        },
        {
            id: 4,
            title: "وب در روز های اخیر",
            Date: "فروردین 1 1403",
            imageUrl: "/assets/images/weblog header/markus-spiske-cvBBO4PzWPg-unsplash.jpg" // Example image URL
        },
        {
            id: 5,
            title: "وب در روز های اخیر",
            Date: "فروردین 1 1403",
            imageUrl: "/assets/images/weblog header/markus-spiske-cvBBO4PzWPg-unsplash.jpg" // Example image URL
        }
    ];

    return (
        <>
            <div className='container relative'>
                <div className="border-t-2 border-x-slate-700 mx-16"></div>
                <div className="flex flex-col lg:flex-row w-full gap-4 mt-10">
                    <div className="lg:w-2/3  flex  flex-col   relative lg:pr-16 ">
                        <div className='lg:w-[75%] lg:h-[300px]  w-[100%] h-[300px] shadow-sm relative'>
                            <Image
                                src='/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg'
                                className='object-cover rounded-xl'
                                layout='fill'
                                alt='تصویر'
                            />
                        </div>
                        <div className='pr-5 py-6'>
                            <div className='w-[70%] leading-7'> 
                                <span className="mt-4 py-3 text-xl font-bold text-[#00004E]">تیم برنامه نویسی اوپی،تیم<br /> خود کفا در حوزه ساخت و<br /> طراحی وب</span>
                                <p className='text-[#7986A4] pt-4'>
                                    تیم اوپی تاسیس شده در 1402/10/1 ، این تیم تشکیل شده<br /> از چند فریلنسر که تجربه کافی در حوزه برنامه نویسی را دارا<br /> هستند. یک تیم خوش ذوق و خلاق در زمینه ساخت سایت<br /> های شخصی ،شرکتی، فروشگاهی و ... که شعارشان نوآوری و<br /> ایده های ناب هست و از مهم ترین حسن های این تیم نظم و<br /> مسئولیت پذیری است. حسن انتخاب شما سبب رضایت شما<br /> خواهد شد.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="lg:w-1/3 flex flex-col">
                        <div className='space-y-4 '>

                            <div className='flex  justify-start py-3'>
                                <div className='border-r-4 border-[#0045CE] ml-4 h-6'></div>

                                <h2 className="text-base font-semibold ">آخرین پست ها</h2>
                                <div className='flex flex-col space-y-4 items-end w-[60%]'>
                                    <div className='border-t-4  border-[#0045CE]  w-4 ml-12 '></div>
                                    <div className='border-t-4  border-[#0045CE] opacity-15 ml-4 w-12'></div>
                                </div>
                            </div>



                            {posts.map(post => (
                                <div key={post.id} className="flex mb-4 pr-2">
                                    <div className="w-20 h-20 mr-3 relative rotate-3 ">
                                        <Image
                                            onPointerEnter={(e) => e.target.classList.add('animate-spin')}
                                            onPointerLeave={(e) => e.target.classList.remove('animate-spin')}
                                            src={post.imageUrl}
                                            className='object-cover rounded-lg'
                                            layout='fill'
                                            alt='Post Image'
                                        />
                                    </div>
                                    <div className='px-3'>
                                        <h3 className="font-bold text-[#00004E] text-sm">{post.title}</h3>
                                        <p className='text-xs text-[#585454] opacity-50 pt-2'>{post.Date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='mt-10'>
                            <div className=' space-y-3'>
                                <div className='flex  justify-start py-3'>
                                    <div className='border-r-4 border-[#0045CE] ml-4 h-6'></div>

                                    <h2 className="text-base font-semibold ">بخش های  وبلاگ</h2>
                                    <div className='flex flex-col space-y-4 items-end w-[60%]'>
                                        <div className='border-t-4  border-[#0045CE]  w-4 ml-12 '></div>
                                        <div className='border-t-4  border-[#0045CE] opacity-15 ml-4 w-12'></div>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" class="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">بک اند </button>
                                    <button type="button" class="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">فرانت اند</button><br />
                                    <button type="button" class="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">طراحی UiUx</button>
                                </div>


                            </div>
                        </div>

                        <div className='mt-10'>
                            <div className='flex  justify-start py-3'>
                                <div className='border-r-4 border-[#0045CE] ml-4 h-6'></div>

                                <h2 className="text-base font-semibold ">تبلیغات</h2>

                            </div>

                            <div className='bg-[#4B4870] w-[70%] h-[200px] flex justify-center items-center'>
                                <span className='text-white text-2xl'>محل   <br /> تبلیغات شما</span>
                            </div>
                        </div>


                    </div>


                </div>

                <div className='absolute bottom-0 right-72 py-24'>
                    <AnimateCircles color={"#ECECFF"} />
                </div>
                 <div className='absolute top-72 left-3 py-24 '>
                    <AnimateCircles color={"#ECECFF"} />
                </div>
              
            </div>

        </>
    );
};

export default Websectiontwo;
