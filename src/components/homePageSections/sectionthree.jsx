import React from 'react';
import Card from '../card';

const cardData = [
    {
        userId: 1,
        name: 'رضا عسگری',
        image: '/orderWebsite',
        role: 'طراح و مدیر تیم',
        description: 'طراح UiUx هستم،22ساله از قم، دارای دوسال سابقه کاری فریلنسری، جویای پیشرفت هستم و با ایجاد این تیم قله های پیشرفت را فتح خواهم کرد.',
        instagramAddress: ' https://www.instagram.com',
        linkedinAddress: ' https://www.linkedin.com',
        starsCount: 4,
    },
    {
        userId: 2,
        name: 'رضا عسگری',
        image: '/orderWebsite',
        role: 'طراح و مدیر تیم',
        description: 'طراح UiUx هستم،22ساله از قم، دارای دوسال سابقه کاری فریلنسری، جویای پیشرفت هستم و با ایجاد این تیم قله های پیشرفت را فتح خواهم کرد.',
        instagramAddress: ' https://www.instagram.com',
        linkedinAddress: ' https://www.linkedin.com',
        starsCount: 4,
    },
    {
        userId: 3,
        name: 'رضا عسگری',
        image: '/orderWebsite',
        role: 'طراح و مدیر تیم',
        description: 'طراح UiUx هستم،22ساله از قم، دارای دوسال سابقه کاری فریلنسری، جویای پیشرفت هستم و با ایجاد این تیم قله های پیشرفت را فتح خواهم کرد.',
        instagramAddress: ' https://www.instagram.com',
        linkedinAddress: ' https://www.linkedin.com',
        starsCount: 4,
    },
    {
        userId: 4,
        name: 'رضا عسگری',
        image: '/orderWebsite',
        role: 'طراح و مدیر تیم',
        description: 'طراح UiUx هستم،22ساله از قم، دارای دوسال سابقه کاری فریلنسری، جویای پیشرفت هستم و با ایجاد این تیم قله های پیشرفت را فتح خواهم کرد.',
        instagramAddress: ' https://www.instagram.com',
        linkedinAddress: ' https://www.linkedin.com',
        starsCount: 4,
    }
]


const Sectionthree = () => {
    return (
        <div className='bg-white w-full flex justify-center py-10'>
            <div className='w-full max-w-7xl flex flex-col items-center space-y-20 '>
                <span className='bg-blue-700 py-3 px-7 rounded-3xl text-2xl font-extrabold text-slate-100'>اعضای تیم اوپی</span>
                <div className='w-full grid grid-cols-4'>
                    <Card data={cardData}/>
                </div>
            </div>
        </div>

    );
}

export default Sectionthree;
