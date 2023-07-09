import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div>Signin <Link to={'/auth/signup'}>Signup</Link></div>
  )
}

export default Signin