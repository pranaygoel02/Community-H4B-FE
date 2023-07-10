import {categories} from './categories';
import { Link } from 'react-router-dom';

const CommunityCategory = () => {

  const Category=()=>(
      <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7'>
        {categories.map((obj,id)=>(
          <div className='w-[192px] h-[205px] box-border py-5 px-2 lg:m-10 group sm:m-5 bg-neutral transition-all' key={obj.community}>
              <div className='pt-2 text-xl text-slate-600 group-hover:text-black translate-y-8 group-hover:translate-y-0 transition-all'>
              <span className={`flex-adjust-center pb-1 h-1/3 `} >{obj.icon}</span>
              <p className={`pb-3 font-inter h-1/3 `}>{obj.community}</p>
                </div>
              <Link to='/' className='btn-primary relative -translate-y-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all' style={{
                padding:'0.5rem 1rem',
              }}>Explore</Link>
          </div>
        ))}
      </div>
  )
  return (
    <div id='community-categories' className='text-center bg-accent  p-10'>
       <p className='font-grostek text-center text-5xl my-5'><b>Community Categories</b></p>
       <div className='flex flex-row justify-center'>
          <Category/>
       </div>
     

    </div>
  )
}

export default CommunityCategory