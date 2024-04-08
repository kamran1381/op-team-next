'use client'
import axios from '@/lib/axios';
import React, { useState } from 'react';
import { toast } from 'sonner';

const Ordersform = () => {
  const [imageFiles, setImageFiles] = useState([]); // Storing multiple files
  const [description, setDescription] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageUpload = (event) => {
    const newFiles = Array.from(event.target.files);
    const totalFiles = imageFiles.length + newFiles.length;
    if (totalFiles > 4) {
      toast("ارسال بیش از 4 عکس مجاز نیست", {
        classNames: {
          toast: 'text-red-600'
        }
      })
      return;
    }
    let updatedFiles = [...imageFiles, ...newFiles].slice(0, 4); // Append new files up to a total of 4
    setImageFiles(updatedFiles);
  };
  const handleDeleteImage = (index) => {
    const filteredFiles = imageFiles.filter((_, i) => i !== index);
    setImageFiles(filteredFiles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (imageFiles.length === 0 || !description.trim()) {
     toast('فیلد ها نباید خالی باشند' ,{
      classNames :{
        toast : 'text-red-600'
    }
     })
      return;
    }

    try {
      const formData = new FormData();
      imageFiles.forEach((file) => formData.append('images', file)); // Appending multiple files
      formData.append('description', description);

      await axios.get('/sanctum/csrf-cookie').then(async () => {
        const response = await axios.post('/api/orders/1/store', formData, {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          },
        });
        if (response.status === 200) {
          setImageFiles([]);
          setDescription('');
          toast('ارسال توضیحات و عکس ها موفقیت آمیز بود', {
            classNames: {
              toast: 'text-green-600',
            },
          });
          setUploadProgress(100);
        } else {
          console.error('Failed to send data to the server.');
        }
      });
    } catch (error) {
      console.error('Error occurred while sending data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col space-y-4'>
      <span className="text-[#7986A4] font-bold text-sm w-full text-center">
        نمونه سایتی که مد نظرتون هست رو برای ما ارسال کنید
      </span>
      <label htmlFor="user-img-upload" className="bg-blue-700 font-bold sm:text-base text-sm py-3 px-4 w-40 text-center text-slate-100 rounded-2xl cursor-pointer">
        آپلود عکس
        <input type="file" id="user-img-upload" className="hidden" onChange={handleImageUpload} accept="image/*" multiple />
      </label>
      <div className="flex flex-wrap justify-start gap-2">
        {imageFiles.map((file, index) => (
          <div key={index} className="relative">
            <img src={URL.createObjectURL(file)} alt={`preview ${index}`} className="w-24 h-24 object-cover rounded-md" />
            {/* <strong class="bg-white  text-black w-3 h-6 absolute top-0 right-0 text-xl align-center cursor-pointer alert-del "
            onClick={() => handleDeleteImage(index)} />&times;<strong
            /> */}
            <button className='bg-white  text-black w-3 h-6 absolute top-0 right-0 text-xl align-center cursor-pointer alert-del'  onClick={() => handleDeleteImage(index)}>&times;</button>
          </div>
        ))}
      </div>

      <textarea
        rows="10"
        placeholder='مشخصات وبسایت مورد نظرتون..'
        className='rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 w-full h-full p-2 resize-none'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="bg-blue-700 self-end py-3 px-4 w-40 text-center text-slate-100 rounded-2xl text-sm font-bold sm:text-base">
        ارسال
      </button>
    </form>
  );
};

export default Ordersform;
