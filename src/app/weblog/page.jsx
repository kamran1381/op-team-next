import React from 'react'
import Websectionone from '@/components/weblogsections/websectionone'
import Websectiontwo from '@/components/weblogsections/websectiontwo'
import Websectionthree from '@/components/weblogsections/websectionthree'
const Weblog = () => {
  return (
    <div className='flex flex-col items-center'>
      <Websectionone/>
      <Websectiontwo/>
      <Websectionthree/>
    </div>
  )
}

export default Weblog