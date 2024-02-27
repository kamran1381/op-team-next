import React from 'react';
import Sidebar from '../layouts/sidebar';

import Ordersform from '@/components/ordersform';
import Panelheader from '../layouts/header';
const Order = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center p-5 relative'>
            <div className='w-full max-w-7xl bg-[#DDE5FA] h-screen flex justify-center rounded-2xl'>
                <div className='w-3/4 flex justify-center items-center space-x-3 space-x-reverse'>
                    <Sidebar />
                    <div className='w-4/5 bg-slate-100 rounded-3xl shadow-md shadow-gray-400 p-10 flex flex-col space-y-5 items-start'>
                        <Panelheader />

                        <Ordersform />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
