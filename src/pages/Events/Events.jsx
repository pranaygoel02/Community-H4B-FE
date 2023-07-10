import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import EventsSection from './EventsSection';
import Wavy from '../../assets/images/wavy.svg'
import Brown from '../../assets/images/brown_elipsce.svg'

function Events() {
  return (
      <>
      <section className="py-16 grid lg:grid-cols-2 md:grid-cols-1 items-center gap-8 px-10 lg:px-0 relative overflow-hidden">
        <img className=" w-full object-cover lg:col-span-1 relative lg:-translate-x-28 rounded-3xl" src={"https://placehold.co/600x400"} />
        <div className="space-y-8 lg:col-span-1 lg:pr-16 pr-0 relative lg:-translate-x-14">
          <div className="absolute right-[10%] bottom-[8%]  h-8 bg-green-500"><img src={Wavy} className="w-[130px] h-[120px]"/></div>
          <div className="absolute -right-28 -top-48  h-8 bg-green-500"><img src={Brown} className="w-[130px] h-[120px]"/></div>
          <h1 className="font-bold text-5xl">Events Happening Now</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            cras pulvinar mattis nunc sed blandit.
          </p>

          <form className="text-left flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-start">
              <div id="loc-search-input" className="input-div">
                <HiLocationMarker className="text-xl" />
                <input name="loc" type="text" placeholder="Enter your location" />
              </div>
              <button type="submit" className="btn-primary">
                Search
              </button>
          </form>
        </div>
      </section>
      <EventsSection/>
      <section className="container-padding grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-8 box-border-event bg-yellow shadow-[100px] shadow-accent">
        <div className="space-y-8 md:col-span-2 lg:col-span-3">
          <h1 className="font-bold text-5xl">Want to list your event?</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            cras pulvinar mattis nunc sed blandit.
          </p>
          <button className='btn-small'>Register Now</button>
        </div>
        <img className="lg:col-span-2 w-full object-cover" src={"https://placehold.co/600x400"} />
      </section>
    </>
  )
}

export default Events