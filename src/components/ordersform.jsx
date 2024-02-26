import React from 'react';

const Ordersform = () => {
  return (
    <form action="" className=' relative'>
      <div className="relative w-[500px] h-[200px]">
        <input
          type='text'
          placeholder=' '
          className='rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500  w-full h-full py-0  '
        />
        <span className="absolute top-0 right-0 text-gray-400 pt-2 pr-3 text-md">مشخصات وبسایت مورد نظرتون..</span>
      </div>
    </form>
  );
};

export default Ordersform;
