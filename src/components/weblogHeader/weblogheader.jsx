import React from 'react';

function Weblogheader() {
    const webheader = [
        {
            name: ' بک اند',
            link: '#'
        },
        {
            name: 'فرانت اند',
            link: '#'
        },
        {
            name: 'طراحی Uiux',
            link: '#'
        },
        {
            name: ' پرسش و پاسخ',
            link: '#'
        },
    ];

    return (
        <div className='pr-10 mt-20'>
            <div className='flex'>
                <button type="button" className=" bg-[#DCE8FF] focus:outline-none focus:ring-4 shadow-md rounded-full text-sm px-7 py-2.5 text-center me-2 mb-2">  
                  <span className='text-base/4 text-[#00004E] '>برو به...</span>
                 </button>
            </div>
            <div className='flex gap-2'>
                {webheader.map((links, index) => (
                    <button key={index} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg shadow-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <span className='text-base/4 text-white font-semibold'>{links.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Weblogheader;
