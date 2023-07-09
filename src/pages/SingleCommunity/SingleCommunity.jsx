import { useParams } from "react-router-dom"
import Facebook from '../../assets/images/Facebook.png'
import Google from '../../assets/images/Google.png'
import Instagram from '../../assets/images/Instagram.png'
import Linkedin from '../../assets/images/Linkedin.png'
import EventCard from "./EventCard"
import CorrdinatorCard from "./CorrdinatorCard"

function SingleCommunity() {

    const {id} = useParams()
    const array=[1,2,3,4,5,6,7]
    const socialLinks=[
      {
        icon:<img src={Facebook} className='w-[25px] h-[25px]'/>,
        link:"/"
      },
      {
        icon:<img src={Google} className='w-[25px] h-[25px]'/>,
        link:"/"
      },
      {
        icon:<img src={Instagram} className='w-[25px] h-[25px]'/>,
        link:"/"
      },
      
      {
        icon:<img src={Linkedin} className='w-[25px] h-[25px]'/>,
        link:"/"
      }
      
    ]
  return (
    <section className="my-5">
      <label className="container-padding-mini ">Community{">"} Hack4Bengal</label>
      <section className=" bg-light box-mo px-16 mt-5">
          <section className="py-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-8">
            <div className="space-y-8 md:col-span-2 lg:col-span-3">
              <div className="adjust-item gap-5 flex-wrap">
                <h1 className="font-bold text-4xl">Hack4Bengal</h1>
                <div className="adjust-item gap-3">
                    {socialLinks.map((obj,id)=>(
                      <>{obj.icon}</>
                    ))}
                </div>
              </div>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                cras pulvinar mattis nunc sed blandit.
              </p>
            </div>
            <img className="lg:col-span-2 w-full object-cover" src={"https://placehold.co/600x400"} />
          </section>
          <section className="py-5 bg-light">
              <h1 className="font-bold text-4xl my-5">Events Gallery</h1>
              <div className="flex flex-row gap-5 overflow-x-auto overflow-y-hidden flex-nowrap event relative ">
                  {array.map((obj,id)=>(
                      <EventCard/>
                    ))}
              </div>
          </section>
          <section className="py-5 bg-light">
              <label className="text-3xl my-5 font-bold">Community Coordinators</label>
              <div className="flex flex-col my-3 justify-center">
                  {array.map((obj,id)=>(
                      < CorrdinatorCard/>
                    ))}
              </div>
          </section>
          <section className="py-5 bg-light grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-8">
          <div className="space-y-8 md:col-span-2 lg:col-span-3">
              <div className="adjust-item gap-5 ">
                <h1 className="font-bold text-4xl flex flex-row items-center gap-5">Interested?</h1>             
              </div>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                cras pulvinar mattis nunc sed blandit.
              </p>
              <div className="flex flex-row justify-start gap-5">
                <button className="btn-sec">Learn More</button>
                <button className="btn-sec bg-primary text-white">Join Now</button>
              </div>
            </div>
            <img className="lg:col-span-2 w-full object-cover" src={"https://placehold.co/600x400"} />
        
            
        </section>
    </section>
  </section>
    
  )
}

export default SingleCommunity