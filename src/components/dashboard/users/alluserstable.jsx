'use client'
import axios from '@/lib/axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import Link from 'next/link'

const Alluserstable = () => {


    const [usersData, setUsersData] = useState([])

    useEffect(() => {
        try {
            axios.get('/sanctum/csrf-cookie').then(async () => {
                const response = await axios.get('api/show-users');
                if (response.status === 200) {
                    // Handle response if necessary
                    setUsersData(response.data.data)
                }
            })

        } catch (error) {
            toast('مشکل در نمایش اطلاعات', {
                classNames: {
                    toast: 'text-red-600',
                },
            });
        }

    }, []);

    return (

        <div className="overflow-x-auto w-full rounded-3xl">
            <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">نام کاربری</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ایمیل</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">نقش</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">سفارشات</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ادیت</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">حذف</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {usersData.map((item) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap"><Link href={`allorders/${item.id}`} className="bg-green-600 py-2 px-4 rounded-md text-sm text-white">نمایش همه</Link></td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    ادیت
                                </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400">
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

export default Alluserstable;
