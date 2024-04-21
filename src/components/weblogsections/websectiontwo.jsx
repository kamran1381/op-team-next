import React from 'react';
import Image from 'next/image';

const Websectiontwo = () => {
    // Sample data for posts
    const posts = [
        {
            id: 1,
            title: "وب در روز های اخیر",
            Date: "فروردین 1 1403" ,
            imageUrl: "/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg" // Example image URL
        },
        {
            id: 2,
            title: "وب در روز های اخیر",
            Date: "فروردین 1 1403" ,
            imageUrl: "/assets/images/weblog header/joshua-aragon-EaB4Ml7C7fE-unsplash.jpg" // Example image URL
        },
        {
            id: 3,
            title: "وب در روز های اخیر",
            Date: "فروردین 1 1403" ,
            imageUrl: "/assets/images/weblog header/markus-spiske-cvBBO4PzWPg-unsplash.jpg" // Example image URL
        } ,
        {
            id: 4,
            title: "وب در روز های اخیر",
            Date: "فروردین 1 1403" ,
            imageUrl: "/assets/images/weblog header/markus-spiske-cvBBO4PzWPg-unsplash.jpg" // Example image URL
        } ,
        {
            id: 5,
            title: "وب در روز های اخیر",
            Date: "فروردین 1 1403" ,
            imageUrl: "/assets/images/weblog header/markus-spiske-cvBBO4PzWPg-unsplash.jpg" // Example image URL
        }
    ];

    return (
        <>
            <div className='container'>
                <div className="border-t-2 border-slate-600 mx-28"></div>
                <div className="flex flex-col lg:flex-row w-full gap-4 mt-7">
                    <div className="lg:w-2/3  flex  flex-col   relative lg:pr-16 ">
                        <div className='lg:w-[100%] lg:h-[300px]  w-[100%] h-[300px] relative'>
                            <Image
                                src='/assets/images/weblog header/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg'
                                className='object-cover rounded-md'
                                layout='fill'
                                alt='تصویر'
                            />
                        </div>
                        <div className='px-3 py-6'>
                            <div style={{ width: "70%" }}> {/* Adjust the width as needed */}
                                <span className="mt-4 text-lg font-bold text-[#00004E]">تیم برنامه نویسی اوپی،تیم<br /> خود کفا در حوزه ساخت و<br /> طراحی وب</span>
                                <p>
                                    تیم اوپی تاسیس شده در 1402/10/1 ، این تیم تشکیل شده از چند فریلنسر که تجربه کافی در حوزه برنامه نویسی را دارا هستند. یک تیم خوش ذوق و خلاق در زمینه ساخت سایت های شخصی ،شرکتی، فروشگاهی و ... که شعارشان نوآوری و ایده های ناب هست و از مهم ترین حسن های این تیم نظم و مسئولیت پذیری است. حسن انتخاب شما سبب رضایت شما خواهد شد.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="lg:w-1/3 flex flex-col">
                     <div className='space-y-4 '>
                        
                     <h2 className="text-lg font-bold mb-4">آخرین پست ها</h2>
                        
                        {posts.map(post => (
                            <div key={post.id} className="flex mb-4">
                                <div className="w-20 h-20 mr-3 relative rotate-3">
                                    <Image
                                        src={post.imageUrl}
                                        className='object-cover rounded-lg'
                                        layout='fill'
                                        alt='Post Image'
                                    />
                                </div>
                                <div className='px-3'>
                                    <h3 className="font-bold">{post.title}</h3>
                                    <p className='text-sm text-[#585454]'>{post.Date}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                    <div className='mt-6'>
                        <div className=' space-y-3'>
                            <span> بخش های وبلاگ  </span>
                             <div className=''>
                             <button type="button" class="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">فرانت اند</button>
                            <button type="button" class="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">فرانت اند</button><br/>
                            <button type="button" class="text-white bg-[#0045CE] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">فرانت اند</button>
                             </div>
                            

                        </div>
                    </div>

                    
                    </div>

                    
                </div>
            </div>

        </>
    );
};

export default Websectiontwo;
