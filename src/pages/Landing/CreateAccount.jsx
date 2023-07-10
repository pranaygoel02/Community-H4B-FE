import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../assets/images/login.png'

const CreateAccount = () => {
  return (
    <section className="container-padding grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-8 bg-yellow">
       
        <img className="lg:col-span-2 w-full object-cover" src={Login} />
        <div className="space-y-8 md:col-span-2 lg:col-span-3">
          <h1 className="font-grostek  text-5xl"><b>Create an account</b></h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            cras pulvinar mattis nunc sed blandit.
          </p>
          <Link to="/" className="btn-primary">Create an account</Link>
        </div>
    </section>
  )
}

export default CreateAccount