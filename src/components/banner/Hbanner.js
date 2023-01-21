import React from 'react'
import Slider from "react-slick";
import SamplePrevArrow from './Prebtn';
import SampleNextArrow from './Nextbtn'
import { Link } from 'react-router-dom';

const Hbanner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
      };

  return (
    // <div className='text-para'>Hbanner</div>
    <>
        <div>
            <Slider {...settings}>
            <div>
                <div className="">
                    <div className="items relative">
                        <img className='w-full' src="images/s1.jpg" alt="slider1" />
                        <div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <p className='text-para text-4xl font-semibold text-normal tracking-[3px]'>Flush Offer</p>
                            <h1 className='text-para font-title font-bold text-6xl mb-5'>This time <span className='text-subbrand'>60% </span>Off for You</h1>
                            <Link to='/reg' className='text-body font-title text-xl font-light rounded-full bg-para px-5 py-1 hover:bg-subbrand hover:text-para ease-in-out '>Buy Now</Link>
                            {/* <button class="">Save Changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="">
                    <div className="items relative">
                        <img className='w-full' src="images/s2.jpg" alt="slider1" />
                        <div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <p className='text-para text-4xl font-semibold text-normal tracking-[3px]'>Flush Offer</p>
                            <h1 className='text-para font-title font-bold text-6xl mb-5'>This time <span className='text-subbrand'>60% </span>Off for You</h1>
                            <Link to='/reg' className='text-body font-title text-xl font-light rounded-full bg-para px-5 py-1 hover:bg-subbrand hover:text-para ease-in-out '>Buy Now</Link>
                            {/* <button class="">Save Changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="">
                    <div className="items relative">
                        <img className='w-full' src="images/s3.jpg" alt="slider1" />
                        <div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <p className='text-para text-4xl font-semibold text-normal tracking-[3px]'>Flush Offer</p>
                            <h1 className='text-para font-title font-bold text-6xl mb-5'>This time <span className='text-subbrand'>60% </span>Off for You</h1>
                            <Link to='/reg' className='text-body font-title text-xl font-light rounded-full bg-para px-5 py-1 hover:bg-subbrand hover:text-para ease-in-out '>Buy Now</Link>
                            {/* <button class="">Save Changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
            
            </Slider>
        </div>
    </>
  )
}

export default Hbanner