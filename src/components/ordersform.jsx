import React from 'react';

const Ordersform = () => {
  return (

    <form>
      <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">

        <div class="px-4 py-2 bg-[#e7e8ec] rounded-lg">
          <textarea id="editor" rows="10" cols='70' class="block w-full px-0 text-sm text-gray-800 bg-[#e7e8ec] focus:outline-none  dark:text-white dark:placeholder-gray-400  " placeholder="مشخصات سایت مورد نظرتون... " required />
        </div>
      </div>
      <div className='flex justify-end'>
        <button type="submit" class=" px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          ارسال مدارک
        </button>
      </div>

    </form>

  );
};

export default Ordersform;
