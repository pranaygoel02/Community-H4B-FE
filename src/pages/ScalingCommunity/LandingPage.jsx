import React from 'react';
import Stars from '../../assets/images/stars.svg';
import Butterfly from '../../assets/images/butterfly.svg';
import Sponsor from '../../assets/images/sponsor.svg';

const LandingPage = () => {
  const dataCard=[1,2,3,4]
  const eventCard=[1,2,3]
  const sponsor=[1,2,3]
  const perksCard=[
    {
        title:"Host Event",
        description:"",
        icons:"Host Now"
    },
    {
        title:"Run Adspace",

        description:"",
        icons:"Book Now"
    },
    {
        title:"List Chapters",
        description:"",
        icons:"List Now"
    }
]

  return (
    <>
    <section className='container-padding bg-primary '>
        <div className='max-w-screen-md mx-auto justify-center flex flex-col text-center text-white space-y-12'>
            <p className='text-4xl font-bold px-[5%] md:px-[20%]'>Where <span className='tag-scale text-xl'>Events</span>Folks hangout & chill</p>
            <p className='px-[5%] md:px-[20%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem fugiat ea nulla fugit deserunt ut debitis illum earum corporis expedita </p>
            <div className='px-[5%] md:px-[20%] flex flex-row justify-center flex-wrap gap-3 '>
                <button className='w-[200px] h-[36px]  bg-neutral text-black rounded-3xl'>Try the platform free</button>
                <button className=' w-[200px] h-[36px] box-shadow-fixed bg-neutral text-black rounded-3xl border-1'>Book for a call</button>
            </div>
            <img className=" mx-w-[850px] mx-h-[540px] text-center object-cover" src={"https://placehold.co/600x400"} />

        </div>
       {/*  <div className="absolute right-[2%] -top-[1.4%] md:right-[10.7%] md:-top-[9.2%] h-10 md:h-12 aspect-square bg-orche rotate-45"><img src={Butterfly}/></div>
        <div className="absolute right-[2%] -top-[1.4%] md:right-[30.7%] md:top-[30%] h-16  "><img src={Stars}/></div> */}
        
    </section>
    <section className='bg-neutral container-padding '>
       <p className='text-center text-3xl px-3'>Used by communities</p>
       <div className='grid md:grid-cols-3 sm:grid-cols-2 '>
         {sponsor.map((obj,id)=>(
            <div className='flex-row flex justify-center my-10'>
            <img src={Sponsor}/>
            </div>
         ))} 
       </div>
    </section>
    <section className='bg-primary container-padding flex-wrap text-white flex flex-row justify-center '>
        {dataCard.map((obj,id)=>(
         <div className='text-center w-[100px] m-5'>
            <p className='text-5xl'>16+</p>
            <p>Community Listed</p>
         </div>
        ))}
    </section>
    <section className='bg-accent container-padding '>
        <p className='text-5xl text-center '>All community,one partner</p>
        <section className="p-10 my-10 bg-neutral box-round  box-shadow-fixed grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-8">
            <img className="lg:col-span-2 w-full object-cover" src={"https://placehold.co/600x400"} />

            <div className="space-y-8 md:col-span-2 lg:col-span-3">
            <h1 className="font-bold text-5xl">List Community?</h1>
            <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                cras pulvinar mattis nunc sed blandit.
            </p>

            </div>
        </section>
        <div className='flex flex-row justify-center flex-wrap  items-center'>
            {perksCard.map((obj,id)=>(
               <>
                   <div className='max-w-[300px] space-y-5  px-5 pb-10 py-5 m-5 text-center bg-gray rounded-3xl'>
                    <img className="max-w-[247px] mx-auto text-center object-cover" src={"https://placehold.co/600x400"} />
                    <p className='text-white my-5  font-grostek text-3xl'>{obj.title}</p>
                    <p className='text-white'>Lorem ipsum dolor sit amet text-white consectetur adipisicing elit. </p>
                    <button className='text-white px-10 py-1 box-shadow-fixed rounded-3xl bg-primary'>{obj.icons}</button>
                   </div>
               </>
            ))}
        </div>
    </section>
    <section className='bg-neutral container-padding space-y-14'>
        <h1 className='text-5xl  w-[100%] md:w-[50%] mx-auto text-center  '>Be more proficient with your Lorem Ipsum Events</h1>
        <div className='flex flex-row flex-wrap justify-center  items-center'>
        {eventCard.map(()=>(
           < div className='w-[302px] space-y-5 m-5'>
            <img className=" w-full object-cover" src={"https://placehold.co/600x400"} />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut inventore nemo consequatur vel tempore magni quas maxime, iste adipisci qui</p>
           </div>
        ))}
        </div>
    </section>
    <section className='container-padding box-border-event-max space-y-10 text-center bg-yellow text-black '>
        <h1 className='text-5xl  w-[90%] md:w-[50%] mx-auto'>Let Lorem Ipsum take your Event</h1>
        <p className='font-inter'>Lorem Ipsum dolor set amet</p>
        <button className='bg-primary rounded-3xl text-white box-shadow-fixed py-1 px-5'>Take care of your event Now</button>
    </section>

    </>
  )
}

export default LandingPage