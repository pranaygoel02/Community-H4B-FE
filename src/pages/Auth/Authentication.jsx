import React,{useState} from 'react';
import Login from './Login/Login'
import Signup from './Signup/Signup';

const index = () => {
  const [state,setState]=useState("Login");

  const changeState=()=>{
    if(state=="Login"){
      setState("SignUp")
    }
    else{
      setState("Login")
    }
  }
  return (
    <div className='mx-auto shadow-2xl max-w-[535px] bg-neutral p-10 md:max-h-[75vh] overflow-auto'>
      
      <div className='font-grostek flex flex-row justify-between mb-5'>
        <button className={state=='Login'?'active font-bold':''} onClick={changeState} >Login</button>
        <button className={state=='SignUp'?'active font-bold':''} onClick={changeState} >SignUp</button>
      </div>
      {state=="Login"?<Login/>:<Signup setState={setState}/>}
    </div>
  )
}

export default index