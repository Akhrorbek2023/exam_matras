import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './Navbar'
import Order from './Order'
import Hero from './Hero'
import Modal from '../modals/Modal'




const Header = () => {

  
  return (
  <>
    <div className='bg-[#EABF9F]'>
      <div className='container'>
        <div className='mb-4'>
        <Navbar/>
        </div>
        <div>
        <Order/>
        </div>
        <Hero/>
      </div>
    </div>
   
  </>
  )
}

export default Header