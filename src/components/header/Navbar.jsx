import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <div></div>
        <ul className='flex items-center space-x-16 fonts-[500] italic text-[20px] text-[#01384D]'>
            <li>
                <Link>Katalog</Link>
            </li>
            <li>
                <Link>Aksiya</Link>
            </li>
            <li>
                <Link>Biz haqimizda</Link>
            </li>
            <li>
                <Link>Manzilimiz</Link>
            </li>
            <li>
                <Link>Aloqa</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar