import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Navber = () => {
  return (
    <>
      <div className='topber border-b border-subbrand'>
        <div className="flex justify-between max-w-container m-auto px-2 align-middle h-16 items-center">
          {/* ------------logo part--------- */}
          <div className="text-para">
            <img className='w-[145px]' src="images/logo.png" alt="LOGO" />
          </div>
          {/* ------------menu part--------- */}
          <div className="">
            <div className="">
              <ul className='flex'>
                <li className='text-para text-normal text-lg hover:text-subbrand ease-in px-2 '><Link to='#' >Home</Link></li>
                <li className='text-para text-normal text-lg hover:text-subbrand ease-in px-2'><Link to='#' >About Us</Link></li>
                <li className='text-para text-normal text-lg hover:text-subbrand ease-in px-2'><Link to='#' >Services</Link></li>
                <li className='text-para text-normal text-lg hover:text-subbrand ease-in px-2'><Link to='#' >Portfolio</Link></li>
                <li className='text-para text-normal text-lg hover:text-subbrand ease-in px-2'><Link to='#' >Gallery</Link></li>
                <li className='text-para text-normal text-lg hover:text-subbrand ease-in px-2'><Link to='#' >Blog</Link></li>
                <li><Link to='#'  className='text-para text-normal text-lg hover:text-subbrand ease-in px-2'>Contact</Link></li>
              </ul>
            </div>
          </div>
          {/* ------------Profile part--------- */}
          <div className="">
            <CgProfile className='inline-block text-para text-xl hover:text-subbrand ease-in cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navber