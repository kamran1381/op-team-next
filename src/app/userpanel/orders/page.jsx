import React from 'react';
import Sidebar from '../layouts/sidebar';

import Ordersform from '@/components/ordersform';
import Panelheader from '../layouts/header';
const Order = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center sm:p-5 p-1 relative'>
            <div className='w-full max-w-7xl bg-[#DDE5FA] py-20 flex justify-center rounded-2xl'>
                <div className='lg:w-3/4 w-full flex-col lg:flex-row flex justify-center items-center lg:space-x-3 lg:space-x-reverse px-1 space-y-3 lg:space-y-0'>
                    <Sidebar />
                    <div className='lg:w-4/5 w-full bg-slate-100 rounded-3xl shadow-md shadow-gray-400 p-5 flex flex-col space-y-5 items-center'>
                        <Panelheader />

                        <Ordersform />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
