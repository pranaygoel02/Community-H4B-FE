import React from 'react'
import { FaRegCopy } from 'react-icons/fa';
import { BsUpload } from 'react-icons/bs';

const EventCard = () => {
  return (
    <div className=''>
        <div className='w-[260px] mr-5 flex-shrink-0 h-[345px] box-border-event-card bg-neutral my-2'>
            <div className='h-1/2 box-border-event bg-blue-400'>
            <button className='relative translate-x-40 translate-y-7 text-gray'><FaRegCopy className='w-32'/></button>
            </div>
            <div className='h-1/2 p-5 space-y-2'>
            <p className='adjust-item font-bold'>Google Cloud Days&nbsp;&nbsp;<BsUpload/></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        </div>
    </div>
  )
}

export default EventCard