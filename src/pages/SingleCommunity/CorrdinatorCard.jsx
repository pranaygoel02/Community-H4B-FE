import React from 'react'
import Linkedin from '../../assets/images/Linkedin.png'

const CorrdinatorCard = ({name, bio, image}) => {
  return (
    <section className="my-5 grid grid-cols-1 md:grid-cols-4 items-center gap-8">
        <img className="col-span-4 md:col-span-1 w-full object-cover" src={image} />

        <div className="space-y-8 col-span-3 md:col-span-2">
          <div className="adjust-item gap-5 ">
             <h1 className="font-bold text-4xl flex flex-row items-center gap-5">{name}</h1>
             
          </div>
          {bio && <p className="">
            {bio}
          </p>}
        </div>
    </section>
  )
}

export default CorrdinatorCard