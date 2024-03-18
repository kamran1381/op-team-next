'use client'
import React, { useState } from 'react';

const Ordersform = () => {
  const [imageFile, setImageFile] = useState(null); // Updated to store the file object directly
  const [description, setDescription] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  // Updated to handle image upload by storing the file object
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }

    console.log(file)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the image and description are provided
    if (!imageFile || !description.trim()) {
      console.log('Please upload an image and fill in the description.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', imageFile); // Appending the file object
      formData.append('description', description);

      // You might need to handle the upload progress differently if the fetch API doesn't support progress updates natively
      const response = await fetch('https://api.op-team.ir/orders/store', {
        method: 'POST',
        body: formData,
        // Omitting Content-Type to let the browser set it automatically with the correct boundary
      });

      if (response.ok) {
        // Handle success
        console.log('Data successfully sent to the server.');
        setUploadProgress(100); // Assuming the upload is complete here for demonstration
      } else {
        // Handle error
        console.error('Failed to send data to the server.');
      }
    } catch (error) {
      console.error('Error occurred while sending data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col space-y-4'>
      <span className="text-slate-400 font-bold text-sm w-full text-center">
        نمونه سایتی که مد نظرتون هست رو برای ما ارسال کنید
      </span>
      <label htmlFor="user-img-upload" className="bg-blue-700 font-bold sm:text-base text-sm py-3 px-4 w-40 text-center text-slate-100 rounded-2xl cursor-pointer">
        آپلود عکس
        <input type="file" id="user-img-upload" className="hidden" onChange={handleImageUpload} accept="image/*" />
      </label>
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="w-full bg-gray-200 h-4 rounded-lg">
          <div className="bg-blue-500 h-full rounded-lg" style={{ width: `${uploadProgress}%` }}></div>
        </div>
      )}
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
