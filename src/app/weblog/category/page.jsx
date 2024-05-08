import React from 'react'
import Weblogheader from '@/components/weblogHeader/weblogheader';
import CategorySlider from '@/components/categoryslider/categoryslider';
import CategorySectionone from '@/components/categorysections/categorysectionone';
function Frontend() {
  return (
    <div className='pt-12'>
      <div className='w-full max-w-7xl  mx-10 lg:p-2 lg:pb-0 relative'>
        <Weblogheader />
        <div className='container mx-auto p-8 flex justify-center'>
          <div className='lg:w-4/5 w-full'>
            <CategorySlider />
          </div>

        </div>

        <CategorySectionone />
      </div>
    </div>


  )
}

export default Frontend; 