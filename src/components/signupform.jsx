import React from 'react';

const SignupForm = () => {
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

export default SignupForm;

