import { useCallback, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Facebook from '../../assets/images/Facebook.png'
import Google from '../../assets/images/Google.png'
import Instagram from '../../assets/images/Instagram.png'
import Linkedin from '../../assets/images/Linkedin.png'
import EventCard from "./EventCard"
import CorrdinatorCard from "./CorrdinatorCard"
import axios from "../../axios/axiosInstance"
import { BsFacebook, BsGoogle, BsLinkedin } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { CgSpinner } from "react-icons/cg"

function SingleCommunity() {

    const {id} = useParams()

    const [communityInfo, setCommunityInfo] = useState(null);

    const array=[1,2,3,4,5,6,7]

    const socialLinkIcons = {
      facebook: <BsFacebook className='w-[25px] h-[25px]'/>,
      instagram: <FaInstagram className='w-[25px] h-[25px]'/>,
      linkedin: <BsLinkedin className='w-[25px] h-[25px]'/>,
      google: <BsGoogle className='w-[25px] h-[25px]'/>,
    } 
    


    const getCommunityInfo = useCallback(async () => {
      if(id) {
        try {
          const {data} = await axios.get(`/community/single/${id}`);
          console.log(data);
          setCommunityInfo(prev => data)
        }
        catch (error) {
          console.log(error);
        }
      }
    }, [id]);
  
    useEffect(() => {
      getCommunityInfo();
    }, [getCommunityInfo]);

    if(!communityInfo) {
      return <div>
        <CgSpinner className='animate-spin w-[50px] h-[50px] mx-auto'/>
      </div>
    }

  return (
    <section className="  pt-5 bg-neutral">
      <label className="my-5 container-padding-mini text-xl"><b><Link to='/community'>Community</Link>{" > "} {communityInfo.name}</b></label>
      <section className="  box-mo mt-5  ">
          <section className="py-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-8 container-padding-mini box-border-event bg-light ">
            <div className="space-y-8 md:col-span-2 lg:col-span-3">
              <div className="adjust-item gap-5 flex-wrap">
                <h1 className="font-bold text-4xl">{communityInfo.name}</h1>
                <div className="adjust-item gap-3">
                    {communityInfo.socialLinks.map((obj,id)=>(
                      <Link target="_blank" to={obj.link} className="flex-adjust-center" key={id}>
                      {obj.icon}
                      </Link>
                    ))}
                </div>
              </div>
              <p className="">
                {communityInfo.description}
              </p>
            </div>
            <img className="lg:col-span-2 w-full object-cover" src={communityInfo.image} />
          </section>
          <section className="py-5 bg-accent box-border-event container-padding-mini">
              <h1 className="font-bold text-4xl my-5">Events Gallery</h1>
              <div className="flex flex-row gap-5 overflow-x-auto overflow-y-hidden flex-nowrap event relative ">
                  {array.map((obj,id)=>(
                      <EventCard/>
                    ))}
              </div>
          </section>
          <section className="py-5  box-border-event container-padding-mini bg-yellow">
              <label className="text-3xl my-5 font-bold">Community Members</label>
              <div className="flex flex-col my-3 justify-center">
                  {communityInfo.members.map((obj,id)=>(
                      <CorrdinatorCard {...obj}/>
                    ))}
              </div>
          </section>
          <section className="py-5  bg-greenlight grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-8  box-border-event container-padding-mini">
          <div className="space-y-8 md:col-span-2 lg:col-span-3">
              <div className="adjust-item gap-5 ">
                <h1 className="font-bold text-4xl flex flex-row items-center gap-5">Interested?</h1>             
              </div>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
                cras pulvinar mattis nunc sed blandit.
              </p>
              <div className="flex flex-row justify-start gap-5 ">
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