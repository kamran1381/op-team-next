'use client'
import axios from '@/lib/axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const Allcardstable = () => {

    const [cartsData, setCartsData] = useState([])

    useEffect(() => {
        try {
            axios.get('/sanctum/csrf-cookie').then(async () => {
                const response = await axios.get('api/carts/show');
                if (response.status === 200) {
                    // Handle response if necessary
                    setCartsData(response.data)
                }
            })

        } catch (error) {
            console.log(error);
        }

    }, []);

    const handleDeleteCard = (item) => {

        try {
            axios.get('/sanctum/csrf-cookie').then(async () => {
                const response = await axios.delete(`api/carts/destroy/${item.id}`);
                if (response.status === 200) {
                    toast(response.data.message, {
                        classNames: {
                            toast: 'text-red-600',
                        },
                    });

                    setCartsData(cartsData.filter(c => c.id !== item.id));
                }
            })

        } catch (error) {
            toast(error, {
                classNames: {
                    toast: 'text-red-600',
                },
            });
        }
    }



    return (

        <div className="overflow-x-auto w-full rounded-3xl">
            <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 ">
                    <tr>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ردیف</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">نام</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">توضیحات</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">عنوان</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ویرایش</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">حذف</th>
                    </tr>
                </thead>
                <tbody className="bg-white overflow-scroll divide-gray-200">
                    {cartsData.map((item) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 text-center text-sm whitespace-nowrap">{item.id}</td>
                            <td className="px-6 py-4 text-center text-sm whitespace-nowrap">{item.name}</td>
                            <td className="px-6 py-4 text-center text-sm whitespace-nowrap">{item.description}</td>
                            <td className="px-6 py-4 text-center text-sm whitespace-nowrap">{item.title}</td>
                            <td className="px-6 py-4 text-center text-sm whitespace-nowrap">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    ادیت
                                </button>
                            </td>
                            <td className="px-6 py-4 text-center text-sm whitespace-nowrap">
                                <button onClick={() =>
                                    toast.custom((t) => (
                                        <div className='bg-slate-100 shadow px-5 py-4 text-[#00004E] rounded-md flex items-center space-x-4 space-x-reverse'>
                                            <span className='font-bold'>آیا اطمینان دارید ؟ </span>
                                            <button className='px-5 py-2 text-xs bg-rose-500 text-slate-100 rounded-md' onClick={() => toast.dismiss(t)}>خیر</button>
                                            <button className='px-5 py-2 text-xs bg-lime-500 text-slate-100 rounded-md' onClick={() => {handleDeleteCard(item);toast.dismiss(t)}}>بله</button>
                                        </div>
                                    ))}
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400">
                                    حذف
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default Allcardstable;
