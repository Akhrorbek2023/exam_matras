import React from 'react'
import DreamBox from './DreamBox'
import TecBox from './TecBox'

const Tecnology = () => {
  return (
    <div className='container'>
        <h1 className='text-[50px] font-[700] text-[#01384D] text-center mb-10'>Ishlab chiqish texnologiyasi</h1>
        <div>
        <TecBox/>
        <DreamBox/>
        </div>
    </div>
  )
}

export default Tecnology