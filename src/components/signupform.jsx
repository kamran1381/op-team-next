import React from 'react';


const Signupform = () => {
  return (
    <form className="max-w-md mx-auto">
     <div className="flex gap-4">
  <div className="flex-1">
    <input
      type="text"
      name="username"
      id="username"
      autoComplete="User-name"
      placeholder='نام کاربری'
      className="mt-1 p-2 block w-full border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:bg-gray-10"
    />
  </div>
  <div className="flex-1">
    <input
      type="text"
      name="Email"
      id="Email"
      placeholder='ایمیل تان را وارد کنید'
      autoComplete="Email"
      className="mt-1 p-2 block w-full border-gray-300 rounded-lg shadow-sm  lg:w-72 hover:bg-gray-100 focus:bg-gray-10 " 
    />
  </div>
</div>

      <div className="mt-4">
       
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="password"
          placeholder='رمز..'
          className="mt-1 p-2 block w-full border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:bg-gray-10"
        />

        
      </div>

     <div className='flex justify-center my-10'>
     <button class="bg-[#0045CE] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded ">
  ثبت نام 
</button>
     </div>

      
    </form>
  );
};

export default Signupform;

import { FaGithub, FaGoogle } from 'react-icons/fa';

const SignupForm = () => {
  return (
    <>
                <form action="" className='w-3/4 p-5 flex flex-col items-center space-y-5'>
                <div className='w-full flex items-center space-x-reverse space-x-5'>
                    <input type="text" className='w-1/3 border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='نام کاربری' />
                    <input type="text" className='w-full border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='آدرس ایمیل خود را وارد کنید' />
                </div>
                <div className='w-full flex items-center space-x-reverse space-x-5'>
                    <input type="password" className='w-1/2 border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='رمز عبور خود را وارد کنید' />
                    <input type="password" className='w-1/2 border p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='رمز عبور خود را مجددا تکرار کنید' />
                </div>
                <button className='bg-blue-700 text-white w-1/3 p-3 rounded-2xl hover:bg-blue-600 transition-colors'>ثبت نام</button>
            </form>
            <div className='w-full relative pb-5'>
                <span className='border border-gray-300 rounded-full w-7 h-7 bg-slate-100 absolute left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center'>یا</span>
                <div className='w-full h-px bg-gray-300'></div>
            </div>
            <form className='w-2/3' action="">
                <button className='w-full p-3 rounded-3xl bg-rose-500 flex justify-center items-center space-x-reverse space-x-5 border text-white hover:bg-rose-400 transition-colors'>
                    <span>ثبت نام با استفاده از گوگل</span>
                    <FaGoogle className='text-xl'/>
                </button>
            </form>
            <form className='w-2/3' action="">
            <button className='w-full p-3 rounded-3xl bg-slate-900 flex justify-center items-center space-x-reverse space-x-5 text-white hover:bg-slate-800 transition-colors'>
                    <span>ثبت نام با استفاده از گیت هاب</span>
                    <FaGithub className='text-xl'/>
                </button>
            </form>
    </>
  
  );
};

export default SignupForm;


