'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
const ForgetForm = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://api.op-team.ir/forgetPassword/${email}`);
      const { token } = response.data; 
      if (token) {
        console.log('token exists : ' ,  token);
        redirect('/resetpaswoed')
      } else {
        console.log('404 not found')
      }
    } catch (error) {
      console.error('Error fetching token:', error);
      setErrorMessage('Something went wrong. Please try again.'); // Set error message if request fails
    }
  };

  return (
    <form className='sm:w-2/3 w-full p-5 pb-0 flex flex-col items-center space-y-5' onSubmit={handleEmailSubmit}>
      <div className='w-full flex items-center space-x-reverse space-x-5'>
        <input onChange={(e) => setEmail(e.target.value)} name="email" type="text" className='w-full border shadow p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='لطفا ادرس ایمیل ت.ون رو بفرستید' />
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button type="submit" className='bg-blue-700 text-white w-1/3 p-3 rounded-2xl hover:bg-blue-600 transition-colors disabled:bg-slate-500'>ارسال ایمیل </button>
    </form>
  );
};

export default ForgetForm;
