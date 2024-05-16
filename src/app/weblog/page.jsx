import React from 'react'
import Websectionone from '@/components/weblogsections/websectionone'
import Websectiontwo from '@/components/weblogsections/websectiontwo'
import Websectionthree from '@/components/weblogsections/websectionthree'
import Weblogheader from '@/components/weblogHeader/weblogheader'
const Weblog = () => {
  return (
      <div className='flex flex-col lg:items-center '>

        <Websectionone />
        <Websectiontwo />
        <Websectionthree />
      </div>

  )
}

export default Weblog