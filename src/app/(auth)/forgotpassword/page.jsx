import React from 'react'
import Forgotform from '@/components/forgotform/forgotform';
const Forgotpassword = () => {
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center p-2 lg:p-5'>
        <div className='w-full max-w-7xl bg-[#DDE5FA] py-20 flex justify-center rounded-2xl mt-24'>
          <div className='lg:w-4/5 w-full bg-slate-100 rounded-3xl shadow-md shadow-gray-400 p-5 flex flex-col space-y-5 items-center'>
            <Forgotform/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forgotpassword;