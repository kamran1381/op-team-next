import React from 'react';

const Ordersform = () => {
  return (

    <form action="" className='w-full flex flex-col space-y-4'>
      <span className="text-slate-400 font-bold text-sm">نمونه سایتی که مد نظرتون هست رو برای ما ارسال کنید</span>
      <label for="" name="" id="" className="bg-blue-700  py-3 px-4 w-40 text-center text-slate-100 rounded-2xl">آپلود عکس</label>
      <textarea
        rows="10"
        placeholder='مشخصات وبسایت مورد نظرتون..'
        className='rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 w-full h-full p-2 resize-none'
      />
      <button className="bg-blue-700 self-end py-3 px-4 w-40 text-center text-slate-100 rounded-2xl">ارسال</button>

    </form>

  );
};

export default Ordersform;
