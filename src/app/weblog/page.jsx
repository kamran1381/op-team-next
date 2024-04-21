import React from 'react'
import Websectionone from '@/components/weblogsections/websectionone'
import Websectiontwo from '@/components/weblogsections/websectiontwo'
const Weblog = () => {
  return (
    <div className='flex flex-col items-center'>
      <Websectionone/>
      <Websectiontwo/>
    </div>
  )
}

export default Weblog