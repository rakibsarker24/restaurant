import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn} from 'react-icons/ci';
import { RiPhoneLine} from 'react-icons/ri';

const Topber = () => {
  return (
    <>
      <div className='topber bg-body border-b border-subbrand'>
            <div className="flex justify-between max-w-container m-auto px-2 py-3">

                    <div className="">
                        <CiLocationOn className='inline-block text-subbrand text-xl'/>
                        <p className='pl-2 font-para font-normal text-para text-sm '>West kufrul, Dhaka-1207</p>
                    </div>

                    <div className="flex">
                            <div className="pr-8">
                                <AiOutlineMail className='inline-block text-subbrand text-xl'/>
                                <p className='pl-2 pl-2 font-para font-normal text-para text-sm'>rakibsasrker1998@gmail.com</p>
                            </div>
                            
                            <div className="">
                                <RiPhoneLine className='inline-block text-subbrand text-xl'/>
                                <p className='pl-2 font-para font-normal text-para text-sm'>+9505 50545045</p>
                            </div>
                    </div>
            </div>
      </div>
    </>
  )
}

export default Topber