import React, { useState } from "react";
import { useFetch } from "../hooks/Fetch";
import Backdrop from '../../assets/images/modalImage.svg'

const Modal = ({showContent}) => {
  const url = "http://localhost:1212/api/products";

  const { data, isPending, error } = useFetch(url);

  

  const [count, setCount] = useState(1);

  const [isSend, setIsSend] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleBtnM = () => {
    setCount(count - 1);
  };

  const handleBtnP = () => {
    setCount(count + 1);
  };

  const handleSend = () =>{
    setIsSend(true)
  }

  const handleExit = () =>{
    showContent(false)
  }

  return (
    <div>
      <div className="w-[100%] h-[100%] fixed bg-[rgba(0,0,0,0.5)] right-0 left-0 top-0 py-[80px]">
        <div className="rounded w-[500px] h-[600px] mx-auto bg-blue-gray-200 box-border">
          <button className="pt-5 pl-5 text-[20px] text-red-600 font-bold" onClick={()=>handleExit()}>X</button>
         { !isSend ?
            <div className="px-6 py-6">
            <h1 className="text-[40px] font-[700] text-[#01384D] text-center mb-6">
              Buyurtma qilish
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                className="block w-[100%] px-4 py-3 rounded mb-6"
                type="text"
                placeholder="Ismingizni yozing"
              />
              <div className="flex items-center rounded mb-6">
                <label
                  className="block w-[15%] bg-[#01384D] px-3 py-3 text-white border rounded-s"
                  htmlFor="num"
                >
                  +998
                </label>
                <input
                  className="w-[88%] outline-none ring-0 py-3 px-3 text-black rounded-e"
                  type="number"
                  id="num"
                  placeholder="Raqamingizni yozing"
                />
              </div>
              <div className="mb-8">
                <label
                  className="block text-[#01384D] text-[18px]"
                  cl
                  htmlFor="product"
                >
                  Mahsulot toifasini tanlang
                </label>
                <select
                  className="block w-[100%] py-3 px-3 rounded"
                  name=""
                  id="product"
                >
                  <option value=""></option>
                  {data?.products?.map((item) => (
                    <option className="px-3" value={item.category}>
                      {item.category}
                    </option>
                  ))}
                </select>
              </div>
              <label className="block text-[#01384D] text-[18px]" htmlFor="">
                Miqdorini tanlang
              </label>
              <div className="flex text-center w-[100%] bg-white rounded mb-6">
                <button
                  className="border-2  border-[#01384D] px-5 py-3 rounded-s"
                  onClick={() => handleBtnM()}
                >
                  -
                </button>
                <div className="border-b-2 border-t-2 border-[#01384D] px-5 py-3 w-[100%]">
                  {count}
                </div>
                <button
                  className="border-2  border-[#01384D] px-5 py-3 rounded-e"
                  onClick={() => handleBtnP()}
                >
                  +
                </button>
              </div>
              <button
                className="ms-0 px-6 py-3 border-2 ml-6
                 border-[#01384D] rounded  
                  font-bold mb-10 text-[white] 
                 bg-[#01384D] transition-all w-[100%]" onClick={()=>handleSend()}
              >
                Yuborish
              </button>
            </form>
          </div> :
          <div className="py-6 px-6">
            <h1 className="text-[30px] text-[#01384D] font-[700] mb-6 text-center">Arizangiz muvofaqiyatli yuborildi</h1>
            <img className="w-[70%] mx-auto mb-8" src={Backdrop} alt="" />
            <button
                className="ms-0 px-6 py-3 border-2 ml-6
                 border-[#01384D] rounded  
                  font-bold mb-10 text-[white] 
                 bg-[#01384D] transition-all w-[100%]" onClick={()=>handleExit()}
              >
                OK
              </button>
          </div>
         }
        </div>
      </div>
    </div>
  );
};

export default Modal;
