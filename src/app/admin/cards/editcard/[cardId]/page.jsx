import Editcardform from '@/components/dashboard/cardshandle/editcardform';
import Sidebar from '@/components/dashboard/sidebar';
import React from 'react';

const EditCard = ({params}) => {
    return (
        <div className='w-full flex flex-col justify-center items-center p-2 lg:p-5'>
            <div className='w-full max-w-7xl bg-[#DDE5FA] py-20 flex justify-center rounded-2xl mt-24'>
                <div className='sm:w-3/4 w-full flex-col lg:flex-row flex justify-center items-center lg:space-x-3 lg:space-x-reverse px-1 space-y-3 lg:space-y-0 '>
                    <Sidebar />

                    <div className='lg:w-4/5 w-full rounded-3xl  p-5 flex flex-col space-y-5 items-center'>
                        <Editcardform params={params}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditCard;
