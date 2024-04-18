import React from 'react'

function Weblogheader() {
    const webheader = [
        {
            name: ' بک اند',
            link: '#'
        },
        {
            name: 'فرانت اند',
            link: '#'
        },

        {
            name: 'طراحی ui/ux',
            link: '#'
        },
        {
            name: ' پرسش و پاسخ',
            link: '#'
        },


    ]
  return (
    <div className='pr-10'>
    <div className='flex'>
        <button type="button" class="text-[#00004E] bg-[#DCE8FF] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">برو به...</button>

    </div>
    <div className='flex gap-2'>
        {webheader.map(links => (
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{links.name}</button>

        ))}
    </div>
</div>

  )
}

export default Weblogheader