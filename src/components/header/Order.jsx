import LogoOrder from "../../assets/images/logo.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modals/Modal";


const Order = () => {
  const [showContent, setShowContent] = useState(false)

  console.log(showContent)
  return (
    <>
      <div className="flex justify-between items-center mb-20">
        <div>
          <img src={LogoOrder} alt="" />
        </div>
        <div className="flex items-center space-x-20">
          <h1>
            <FontAwesomeIcon icon={faPhone} /> +998 90 123 45 67
          </h1>
          <button
            onClick={() => setShowContent(true)}
            className="px-4 py-2 border-2 border-blue-500 rounded bg-white font-[600] text-[20px] hover:text-[white] hover:bg-[#01384D]"
          >
            Buyurtma berish
          </button> 
        </div>
      </div>
      {
        showContent && <Modal setShowContent={setShowContent} />
      }
    </>
  );
};

export default Order;
