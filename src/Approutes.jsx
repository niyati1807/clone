import React from 'react'
import Navbar1 from './component/Navbar1'
import Slider from './component/slider'
import Food from './component/Food'
import Explore from './component/explore'
import Contact from './component/Contact'

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


