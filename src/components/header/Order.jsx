import LogoOrder from "../../assets/images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'



const Order = () => {
  return (
    <div className="flex justify-between items-center mb-20">
        <div>
            <img src={LogoOrder} alt="" />
        </div>
        <div className="flex items-center space-x-20">
            <h1><FontAwesomeIcon icon={faPhone} />  +998 90 123 45 67</h1>
            <button className="px-4 py-2 border-2 border-blue-500 rounded bg-white font-[600] text-[20px] hover:text-[white] hover:bg-[#01384D]">Buyurtma berish</button>
        </div>
    </div>
  )
}

export default Order