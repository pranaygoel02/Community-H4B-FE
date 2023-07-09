import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import CommunityList from '../../components/Community/CommunityList';

function Community() {
  const socialLinks=[
    {
      icon:< BsFacebook className='w-[25px] h-[25px]'/>,
      link:"/"
    },
    {
      icon:< BsLinkedin className='w-[25px] h-[25px]'/>,
      link:"/"
    },
    {
      icon:< FaInstagram className='w-[25px] h-[25px]'/>,
      link:"/"
    },
    
    {
      icon:< BsGoogle className='w-[25px] h-[25px]'/>,
      link:"/"
    }
    
  ]


  const communityData = Array.from({length: 15}).fill({
    image: "https://placehold.co/600x400",
    title: "Hack4Bengal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia beatae maiores non assumenda vel accusantium rerum dolorem voluptatum, totam eius ipsam deserunt deleniti nobis soluta nulla explicabo impedit odio?",
    categories: ["Tech", "Hackathon"],
    socialLinks
  })

  return (
    <div className=''>
      <section id='community-hero' className='min-h-[542px] relative rounded-3xl bg-primary text-center py-8 md:py-0 flex flex-row justify-center items-center '>
      <div className="absolute left-[15%] md:left-[15%] -bottom-4 h-8 aspect-square bg-orche rotate-45"></div>
      <div className="absolute right-[15%] md:right-[17%] -top-4 h-8 aspect-square bg-green"></div>
      <div className="absolute left-[50%] -bottom-[13%] hidden md:block md:-bottom-[13%] -translate-x-[50%] w-[15vh] h-[15vh] rounded-[55px] aspect-square bg-white"></div>
        <div className='space-y-12 container-padding'>
            <h1 className="font-bold text-5xl text-white">Search Local Communities Now!</h1>
              <p className="md:max-w-[60%] mx-auto text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras
                pulvinar mattis nunc sed blandit.
              </p>
              <form  className="flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-center">
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
      <section className='text-center container-padding space-y-12'>
        <div className='w-full inline-flex justify-between items-center mt-16'>
          <hr className='w-full hidden sm:block border-[1px]'/>
          <p className='font-grostek text-5xl w-full'><b>Landing Zone</b></p>
          <hr className='w-full hidden sm:block border-[1px]'/>
        </div>
        <div className='flex flex-row border-2 border-black justify-center h-[520px]'></div>
      </section>
      <section className='bg-accent'>
         <div className='container-padding space-y-12'>
            <p className='text-left font-bold text-3xl'>Communities near Kolkata, West Bengal</p>
            <CommunityList data={communityData}/>
         </div>
      </section>
    </div>
  )
}

export default Community