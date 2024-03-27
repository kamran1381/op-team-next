'use client'
import axios from '@/lib/axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';


const Addcardform = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        description: '',
        linkinsageram: '',
        linkedin: '',
        pic: null
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData({ ...formData, pic: file }) // Appending the file object
        }
    }

    const handelAddCard = (e) => {
        e.preventDefault();
        try {
            axios.get('/sanctum/csrf-cookie').then(async () => {
                const response = await axios.post("api/carts/store", formData, {
                    headers: { "Content-Type": 'multipart/form-data' }
                })
                if (response.status === 200) {
                    toast(response.data.message, {
                        classNames: {
                            toast: 'text-lime-500',
                        },
                    });
                    router.push('/admin/cards/')
                }
            })

        } catch (error) {
            toast(error, {
                classNames: {
                    toast: 'text-rose-500',
                },
            });
        }

    }
    return (
        <form onSubmit={handelAddCard} className='bg-slate-100 p-5 flex flex-col space-y-5 w-full justify-center items-center rounded-xl'>
            <input onChange={handleChange} className='py-3 px-2 w-3/6 rounded-md shadow outline-none text-gray-800' placeholder='نام را وارد کنید' type="text" name='name' />
            <input onChange={handleChange} className='py-3 px-2 w-3/6 rounded-md shadow outline-none text-gray-800' placeholder='عنوان را وارد کنید' type="text" name='title' />
            <input onChange={handleChange} className='py-3 px-2 w-3/6 rounded-md shadow outline-none text-gray-800' placeholder='توضیحات را وارد کنید' type="text" name='description' />
            <input onChange={handleChange} className='py-3 px-2 w-3/6 rounded-md shadow outline-none text-gray-800' placeholder='لینک اینستاگرام را وارد کنید' type="text" name='linkinsageram' />
            <input onChange={handleChange} className='py-3 px-2 w-3/6 rounded-md shadow outline-none text-gray-800' placeholder='لینکدین را وارد کنید' type="text" name='linkedin' />
            <label htmlFor="card-img-upload" className="bg-blue-700 font-bold sm:text-base text-sm py-3 px-2  text-center text-slate-100 rounded-md cursor-pointer w-3/6">
                آپلود عکس
                <input type="file" id="card-img-upload" className="hidden" onChange={handleImageUpload} accept="image/*" />
            </label>
            <button type='submit' className='w-3/6 px-2 py-3 bg-green-500 text-white text-lg font-bold rounded-md'>ثبت اطلاعات</button>
        </form>
    );
}

export default Addcardform;
