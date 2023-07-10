import React from 'react';
import Stars from '../../assets/images/stars.svg';
import Butterfly from '../../assets/images/butterfly.svg';
import Sponsor from '../../assets/images/sponsor.svg';

const LandingPage = () => {
  return (
    <>
    <section className='container-padding bg-primary '>
        <div className='max-w-screen-md mx-auto'>
            <p>Where <span className='tag-scale'>Events</span>folks hangout & chill<span><img src={Stars}/></span></p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem fugiat ea nulla fugit deserunt ut debitis illum earum corporis expedita ab consequatur ullam itaque repudiandae, voluptate, velit laboriosam nam possimus.</p>
            <div className=''>
                <button>Try the platform free</button>
                <button>Book for a call</button>
            </div>
            <img className="lg:col-span-2 w-full object-cover" src={"https://placehold.co/600x400"} />

        </div>
        <div className="absolute right-[2%] -top-[1.4%] md:right-[0.7%] md:-top-[3.2%] h-10 md:h-12 aspect-square bg-orche rotate-45"><img src={Butterfly}/></div>
        
    </section>
    <section className='bg-neutral'>
       <p>Used By Communities</p>
       <div className='grid md:grid-cols-3 sm:grid-cols-2'>
          <img src={Sponsor}/>
       </div>
    </section>
    
    </>
  )
}

export default LandingPage