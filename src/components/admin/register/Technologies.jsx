import React from 'react'
import { useState, useEffect } from "react";
import UserP from "../../../assets/images/User.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { SwitchOrder } from "../switch/Switch";

const Technologies = () => {
    const [data, setData] = useState([]);
    const url = "http://localhost:1212/admin/technology";
  
    useEffect(() => {
      const token = JSON.parse(localStorage.getItem('token'))
      fetch(url,{
          headers:{
              'Authorization': token.token
          }
      })
        .then((res) => res.json())
        .then((json) => setData(json));
    }, []);
  return (
    <div>
          <div>
        <div className="bg-[#01384D] py-6 px-4 flex justify-between">
          <form action="">
           
          </form>
          <div className="flex items-center">
            <div>
              <img
                className="bg-white px-3 py-2 rounded-[50%]"
                src={UserP}
                alt=""
              />
            </div>
            <h1 className="text-white ml-4">Jonh Doe</h1>
          </div>
        </div>
        <div className="px-8 py-4">

          <table className="w-[100%] text-center mb-20">
            <tr className="bg-[#01384D] text-white py-4">
              <th className="py-3">
                <h1>Nomlari</h1>
              </th>
              <th>
                <h1>Matn</h1>
              </th>
              <th>
                <h1>Video</h1>
              </th>
             
              <th className="w-[50%]">
                <h1 className="w-[70%]"></h1>
              </th>
            </tr>
          {
            data.map((item)=>(
                <tr className="border">
                <td className="py-3">
                  <h1>{item.name}</h1>
                </td>
                <td>
                  <h1>{item.description}</h1>
                </td>
                <td>
                  <h1>{item.link}</h1>
                </td>
                <td>
                  <div className="flex justify-between px-10">
                    <h1></h1>
                    <h1 className="text-red-500" onClick={() => handleDelete()}>
                      <FontAwesomeIcon icon={faTrash} />
                    </h1>
                  </div>
                </td>
              </tr>
            ))
          }
          </table>
          <button
        className="ms-0 px-6 py-3 border-2 ml-6 
                 border-[#01384D] rounded  
                  font-bold mb-10 text-[white] 
                 bg-[#01384D] transition-all float-right"
        type="submit"
        onClick={()=>handleAdd()}
      >
        Qo'shish
      </button>
        </div>
      
      </div>
    </div>
  )
}

export default Technologies