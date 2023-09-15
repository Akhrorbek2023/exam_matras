import { Link } from "react-router-dom"
import Facebook from "../../assets/images/facebook.svg"
import AbuTech from "../../assets/images/abuTech.svg"



const Footer = () => {
  return (
    <div>
        <div className="container">
           <div className="flex justify-between border-b-2 py-6">
           <div>
            <ul className='flex items-center space-x-16 fonts-[500] text-[20px] text-[#01384D]'>
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
            <div>
                <img src={Facebook} alt="" />
            </div>
           </div>
           <div className="flex justify-between py-5">
            <p>Bizni huquqlarimiz o'zimiz tomondan himoyalangan</p>
            <img src={AbuTech} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Footer