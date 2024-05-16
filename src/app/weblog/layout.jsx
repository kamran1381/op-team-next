import React from 'react'
import Weblogheader from '@/components/weblogHeader/weblogheader'
function Layout({children}) {
    return (
        <div className='relative'>
         <div className='lg:w-[55%] w-full relative'>
          <div className='flex lg:justify-center justify-normal'>
            <Weblogheader/>
          </div>    

         </div>
          {children}
        </div>
      );
}

export default Layout