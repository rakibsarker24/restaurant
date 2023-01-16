import React from 'react'
import Slider from "react-slick";
import SamplePrevArrow from './Prebtn';
import SampleNextArrow from './Nextbtn'

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
                    <img className='w-full' src="images/s1.jpg" alt="slider1" />
                </div>
            </div>
            <div>
                <div className="">
                    <img className='w-full' src="images/s3.jpg" alt="slider1" />
                </div>
            </div>
            <div>
                <div className="">
                    <img className='w-full' src="images/s1.jpg" alt="slider1" />
                </div>
            </div>
            
            </Slider>
        </div>
    </>
  )
}

export default Hbanner