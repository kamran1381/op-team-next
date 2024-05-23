'use client';
import { useState } from 'react';
import Axios from 'axios';
import Inputsendicon from '../icons/inputsendicon';

const AddComment = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const axios = Axios.create({
    baseURL: 'https://api.op-team.ir',  // Define your base URL here
    timeout: 9000,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
      Accept: 'application/json',
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    const apiUrl = '/api/comments'; // Adjusted to use baseURL from axios instance
    console.log(`Posting comment to ${apiUrl}`);

    try {
      const response = await axios.post(apiUrl, { text });

      if (response.status === 200) {
        setText('');
        console.log('Comment added');
      } else if (response.status === 404) {
        setError('The API endpoint was not found. Please check the URL.');
      } else {
        setError(`Error adding comment: ${response.data.message || 'An error occurred'}`);
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code outside the range of 2xx
        if (error.response.headers['content-type']?.includes('text/html')) {
          setError('Received an HTML response from the server. Please check the API URL or try again later.');
        } else {
          setError(`Error adding comment: ${error.response.data.message || 'An error occurred'}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response received from the server. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Error adding comment. Please try again later.');
      }
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className='lg:w-4/5 w-full relative pr-3 flex items-center'>
      <input
        type="text"
        id="inputField"
        name="inputField"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-[100%] px-4 py-4 border rounded-md focus:outline-none focus:border-blue-400 border-r-2 border-r-[#0045CE]"
        placeholder="سوال یا نظری وارد کنید..."
      />
      <div className='absolute top-6 left-3' onClick={handleSubmit} style={{ cursor: 'pointer' }}>
        <Inputsendicon />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default AddComment;

