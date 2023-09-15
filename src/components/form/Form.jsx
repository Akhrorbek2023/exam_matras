import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const Form = () => {

    const inputVal = useRef()

    const [item, setItem] = useState()

    console.log(inputVal.current);

 const handleSubmit = (e)=>{
    e.preventDefault()
    setItem(inputVal.current.value)
 } 
  return (
    <div className="bg-[#EABF9F] py-10 h-[230px]">
      <div className="container">
        {
            !item ? 
            <div className="flex justify-between items-center mt-5">
            <div>
              <h1 className="text-[36px] font-[700] text-[#01384D] mb-2">Sizni qiziqtirdimi?</h1>
              <p>Raqamingizni qoldiring, biz siz bilan bog'lanamiz</p>
            </div>
            <div className="ml-[400px] mt-8">
              <form onSubmit={handleSubmit}>
                <label className="bg-white py-4 mr-2  pl-4 border-2 border-blue-500 rounded" htmlFor="number">
                  +998
                  <input ref={inputVal} className="ml-2 text-[18px] border-s-2 pl-2 ring-0 outline-none"
                    
                    type="number"
                    id="number"
                    placeholder="Raqamingizni yozing"
                  />
                </label>
                <button className="ms-0 px-6 py-3 border-2 ml-6
                 border-[#01384D] rounded  
                  font-bold mb-10 text-[white] 
                 bg-[#01384D] transition-all" type="submit">Yuborish</button>
              </form>
            </div>
          </div> : 
          <div className="text-center mt-5">
            <h1 className="text-[36px] font-[700] w-[600px] mx-auto">Arizangiz muvofaqiyatli qabul qilindi <span className="text-green-500 rounded"><FontAwesomeIcon icon={faSquareCheck} /></span></h1>
            <p>Siz bilan tez orada bog'lanamiz</p>
          </div>
        }
      </div>
    </div>
  );
};

export default Form;
