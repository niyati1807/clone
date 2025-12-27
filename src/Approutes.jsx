import React from 'react'
import Navbar1 from './Component/Navbar1'
import Slider from './Component/Slider'
import Food from './Component/Food'
import Explore from './Component/Explore'
import Contact from './Component/Contact'

const Approutes = () => {
  return (
    <div>
      <Navbar1 />
      <Slider />
      <Food />
      <Explore/>
      <Contact/>
    </div>
  )
}

export default Approutes
