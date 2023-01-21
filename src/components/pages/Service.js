import React from 'react'
import Navber from '../navber/Navber'
import Topber from '../topber/Topber'
import Card from '../card/Card'

const Service = () => {
  return (
    <div>
        <Topber/>
        <Navber/>
        <p className='text-para'>Service</p>
        <Card/>
    </div>
  )
}

export default Service