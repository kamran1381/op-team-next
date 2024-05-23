'use client'
import React, { useState } from 'react';
import axios from 'axios';

function Resetpassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       
      const response = await axios.post(`https://api.op-team.ir/forgetPassword/${email}`, { email });

      if (response.status === 200) {
        // Handle successful response
        alert('Password reset email sent successfully.');
      } else {
        // Handle errors
        alert('Failed to send password reset email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">ریست پسورد</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="ایمیل وارد کنید" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button 
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            ارسال ایمیل
          </button>
        </form>
      </div>
    </div>
  );
}

export default Resetpassword;
