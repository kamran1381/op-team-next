'use client'
import React,{useState} from 'react'
import axios from '@/lib/axios'
const Forgotform = () => {
  const [email , setEmail] =  useState('')
   
   const handleEmailSubmit = async (event) => {
      event.preventDefault();
      try{
          const response = await axios.post("YOUR_API_ENDPOINT" , {email})
          if(response.data.success){
            console.log('your email has been sent')
          }else{
            console.log('no email has been found')
          }
      }catch(error){
        console.log('Error :' , error)
      }
   }
  return (
    <form  className='sm:w-2/3 w-full p-5 pb-0 flex flex-col items-center space-y-5' onSubmit={handleEmailSubmit}>
    <div className='w-full flex items-center space-x-reverse space-x-5'>
        <input onChange={(e)=>setEmail(e.target.value)} name="email" type="text" className='w-full border shadow p-3 rounded-2xl text-sm outline-none hover:bg-slate-200 transition-colors' placeholder='آدرس ایمیل خود را وارد کنید' />
    </div>
    
  
    <button type="submit" className='bg-blue-700 text-white w-1/3 p-3 rounded-2xl hover:bg-blue-600 transition-colors disabled:bg-slate-500' >ارسال ایمیل</button>
</form>
  )
}

export default Forgotform