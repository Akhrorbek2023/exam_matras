import React, { useState } from "react";
import Matras from "../../assets/images/matrascha.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modals/Modal";

const BoxA = ({
  weight,
  warranty,
  size,
  name,
  cost,
  capacity,
  images,
  new_cost,
}) => {
  const [item, setItem] = useState("");

  const [showContent, setShowContent] = useState(false)

  return (
   <>
    <div className="mb-10">
      <div className="flex bg-slate-300  border-4 border-blue-300 py-6">
        <div className="w-[50%] relative">
          <img className="mt-20 ml-10" src={Matras} alt="images" />
          <h1 className="absolute px-3 py-2 bg-blue-500 text-white rounded text-[14px] left-6 top-1">
              AKSIYA
            </h1>
        </div>
        <div className="w-[60%] pr-8">
          <h1 className="text-[40px] font-[700] text-[#01384D] mb-8">{name}</h1>
          <div className="flex space-x-16 mb-[40px]">
            <div>
              <p className="text-slate-500">Yuklama</p>
              <h1 className="text-[30px] font-[700] text-[#01384D]">
                {weight}kg
              </h1>
            </div>
            <div>
              <p className="text-slate-500">Kafolat</p>
              <h1 className="text-[30px] font-[700] text-[#01384D]">
                {warranty} Yil
              </h1>
            </div>
            <div>
              <p className="text-slate-500">O'lchami</p>
              <h1 className="text-[30px] font-[700] text-[#01384D]">{size}</h1>
            </div>
            <div>
              <p className="text-slate-500">Sigimi</p>
              <h1 className="text-[30px] font-[700] text-[#01384D]">
                {capacity}kishilik
              </h1>
            </div>
          </div>
          <div>
            <p className="w-[90%] mb-[30px] text-slate-500">
              Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor
              a est. Habitant adipiscing ut sed pulvinar tellus, ut urna,
              fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum
              varius egestas.
            </p>
          </div>
          <div className="mb-[10px]">
            <p className="text-slate-500">Narxi</p>

            <h1 className="text-[30px] text-[#01384D] font-[700]">
                <span className="text-red-500 line-through mr-4 text-[20px]">
                  {new_cost}
                </span>
                {cost}
              </h1>
          </div>
          <div>
            <button className="px-4 py-2 border-2 border-blue-500 rounded bg-white font-bold items-center" onClick={()=>setShowContent(true)}>
              Buyurtma berish <FontAwesomeIcon icon={faCartShopping} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  
    {
      showContent && <Modal setShowContent={setShowContent}/>
    }
   </>
  );
};

export default BoxA;