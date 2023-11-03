import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
const Form = () => {
  return (
    <>
    <div className='Navbar'>
      <ul>
        <li> <Link to="/Loginpage"> Login </Link></li>
        <li> <Link to="/Register"> Register </Link></li>
      </ul>
    </div> 
    </>
  )
}

export default Form
