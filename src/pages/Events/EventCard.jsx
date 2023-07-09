import React from 'react'
import { BsUpload } from 'react-icons/bs';
import { BsFillCalendarFill } from 'react-icons/bs';
import { HiLocationMarker } from "react-icons/hi";

import { BsFillEjectFill } from 'react-icons/bs';


const EventCard = () => {
  return (
    <div className='w-[260px] mr-5 flex-shrink-0 h-[345px] box-border-event-card bg-neutral my-2'>
        <div className='h-2/5 box-border-event bg-blue-400'>
           <button className='px-5 py-2 bg-gray text-white relative translate-x-40 rounded-3xl translate-y-4'>Free</button>
        </div>
        <div className='h-3/5 p-5 space-y-2'>
           <p className='adjust-item font-bold'>Google Cloud Days&nbsp;<BsUpload/></p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
           <p className='adjust-item'>< BsFillCalendarFill/>&nbsp;18th July 2023</p>
           <p className='adjust-item'><HiLocationMarker/>&nbsp;SNU University</p>
           <button className='px-3 py-3 bg-gray text-white relative translate-x-[205px] shadow-sm -translate-y-[1px]  rounded-full '><BsUpload/></button>

        </div>

    </div>
  )
}

export default EventCard