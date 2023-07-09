import { BiLogoReact } from 'react-icons/bi';
import { AiOutlineCloud } from 'react-icons/ai';
import { PiWrenchFill } from 'react-icons/pi';
import { MdOutlineLandscape } from 'react-icons/md';
import { FiFigma } from 'react-icons/fi';
import { PiKeyhole } from 'react-icons/pi';
import { GiPencilRuler } from 'react-icons/gi';
import { CgNotes } from 'react-icons/cg';


export const categories=[
    {
        community:"React",
        icon:<BiLogoReact className='w-[45px] h-[45px]'/>,
        link:"/community",
        active:false
    },
    {
        community:"Cloud",
        icon:<AiOutlineCloud className='w-[40px] h-[40px]'/>,
        link:"/community",
        active:false
    },
    {
        community:"CP",
        icon:<PiWrenchFill className='w-[40px] h-[40px]'/>,
        link:"/community",
        active:false
    },
    {
        community:"Web 3.0",
        icon:<MdOutlineLandscape className='w-[40px] h-[40px]'/>,
        link:"/community",
        active:false
    },
    {
        community:"Figma",
        icon:<FiFigma className='w-[40px] h-[40px]'/>,
        link:"/community",
        active:true
    },
    {
        community:"Open Source",
        icon:<PiKeyhole className='w-[40px] h-[40px]'/>,
        link:"/community",
        active:false
    },
    {
        community:"Dev",
        icon:<GiPencilRuler className='w-[40px] h-[40px]'/>,
        link:"/community",
        active:false
    },
    {
        community:"College Group",
        icon:<CgNotes className='w-[40px] h-[40px]'/>,
        link:"/community",
        active:false
    }
    
]
