import React from 'react'
import Linkedin from '../../assets/images/Linkedin.png'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CorrdinatorCard = ({name, bio, image, socialLinks}) => {

  console.log(socialLinks);

  const socialLinkIcons = {
    facebook: <BsFacebook className="w-[25px] h-[25px]" />,
    instagram: <FaInstagram className="w-[25px] h-[25px]" />,
    linkedin: <BsLinkedin className="w-[25px] h-[25px]" />,
    twitter: <BsTwitter className="w-[25px] h-[25px]" />,
  };

  return (
    <section className="my-5 grid grid-cols-1 md:grid-cols-4 items-center gap-8">
        <img className="col-span-4 md:col-span-1 w-full object-cover" src={image} />

        <div className="space-y-8 col-span-3 md:col-span-2">
          <div className="adjust-item gap-5 ">
             <h1 className="font-bold text-4xl flex flex-row items-center gap-5">{name}</h1>
             {socialLinks?.map((obj, id) => (
                <Link
                  to={obj.link}
                  target="_blank"
                  className="flex justify-between items-center"
                  key={id}
                >
                  {socialLinkIcons[obj.name]}
                </Link>
              ))}
          </div>
          {bio && <p className="">
            {bio}
          </p>}
        </div>
    </section>
  )
}

export default CorrdinatorCard