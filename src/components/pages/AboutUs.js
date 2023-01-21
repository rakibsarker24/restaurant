import React from 'react'
import Topber from '../topber/Topber'
import Navber from '../navber/Navber'

const AboutUs = () => {
  return (
    <div>
        <Topber/>
        <Navber/>
        <div className=' max-w-container m-auto '>
            <p className='text-para'>About us</p>
        </div>
    </div>
  )
}

export default AboutUs