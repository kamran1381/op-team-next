import React from 'react'
import Image from 'next/image'
export default function page() {

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center p-5 relative'>
        <div className='w-full max-w-7xl bg-[#DDE5FA] h-[100vh] flex items-center justify-center rounded-r-xl rounded-l-2xl flex-row'>

          <div className='w-1/5 flex flex-col justify-center items-center'>
            <button type="button" className="text-black bg-[#FFFFFF] font-medium rounded-lg text-sm px-5 py-4 text-center mb-2">ثبت نام</button>
            <button type="button" className="text-black bg-[#FFFFFF] font-medium rounded-lg text-sm px-5 py-4 text-center">ورود</button>
          </div>

          <div className='w-4/5'>

            <div className='w-[720px] h-[370px] bg-[#F8FAFF] rounded-[25px] shadow-inner'>
              <div className='py-10 flex items-center'>
                <img src='/assets/images/logo.png' loading='lazy' width={70} height={70} className='px-2' alt='لوگوی او پی تیم' />
                <div className='text-center'>
                  <span className='text-base px-2'>برای سفارش سایت و ثبت درخواست لطفا وارد حساب کاربری خود شوید.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}
