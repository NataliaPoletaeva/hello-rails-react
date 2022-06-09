import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <p>Welcome To Hello Rails React App</p>
      <NavLink to="/greeting">Get a Greeting</NavLink>
    </div>
  )
}

export default Home;