'use client'
import axios from '@/lib/axios';
import React, { useEffect, useState } from 'react'

function OrderDetails({ params }) {
    const [orderData, setOrderData] = useState()
    useEffect(() => {
        try {
            axios.get('/sanctum/csrf-cookie').then(async () => {
                const response = await axios.get(`api/orders/${params.userId}/showall`);
                if (response.status === 200) {
                    // Handle response if necessary
                    const data = response.data.orders;
                    const [order] = data.filter(order => order.id == params.Id)
                    setOrderData(order)
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
        <div className='w-full flex flex-col justify-center items-center bg-slate-100 rounded-lg p-10' >

            {
                orderData ?

                    (
                        <>
                            <span>{orderData.image}</span>
                            <span>{orderData.description}</span>
                        </>
                    )
                    :
                    (
                        <span className='text-gray-500 font-bold'>سفارشی با این مشخصات یافت نشد</span>

                    )
            }
        </div>

    )

}

export default OrderDetails