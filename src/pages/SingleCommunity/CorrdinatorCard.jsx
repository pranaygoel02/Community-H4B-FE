import React from 'react'
import Linkedin from '../../assets/images/Linkedin.png'

const CorrdinatorCard = () => {
  return (
    <section className="my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-8">
        <img className="lg:col-span-2 w-full object-cover" src={"https://placehold.co/600x400"} />

        <div className="space-y-8 md:col-span-2 lg:col-span-3">
          <div className="adjust-item gap-5 ">
             <h1 className="font-bold text-4xl flex flex-row items-center gap-5">Kajal Roy<span><img src={Linkedin} className=''/></span></h1>
             
          </div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            cras pulvinar mattis nunc sed blandit.
          </p>
        </div>
    </section>
  )
}

export default CorrdinatorCard