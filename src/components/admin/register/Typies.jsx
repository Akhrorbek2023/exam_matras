import React, { useEffect, useState, useRef } from "react";
import UserP from "../../../assets/images/User.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Typies = () => {

    const [showAddModal, setShowAddModal] = useState(false)
    const [inputData, setInputData] = useState("")
    console.log(inputData);

  const [data, setData] = useState([]);
  const url = "http://localhost:1212/admin/categories";

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


  console.log(data);

 
  return (
    <div>
      <div>
      <div>
            <div className="bg-[#01384D] py-6 px-4 flex justify-between">
              <form action="">
                <div className="border-2 bg-white inline-block px-4 py-1 rounded">
                  <input
                    className="placeholder-black ring-0 outline-none"
                    type="text"
                    id="adminSearch"
                    placeholder="User"
                  />
                  <label htmlFor="adminSearch">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </label>
                </div>
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
                    <h1>Toifalar</h1>
                  </th>
  
                  <th className="w-[80%]">
                    <h1 className="w-[70%]"></h1>
                  </th>
                </tr>
                {data.map((item) => (
                  <tr className="border">
                    <td className="py-3">
                      <h1>{item.category}</h1>
                    </td>
                    <td>
                      <div className="flex justify-between px-10">
                        <h1></h1>
                        <h1
                          className="text-red-500"
                          onClick={() => handleDelete()}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </h1>
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
              <button
          className="ms-0 px-6 py-3 border-2 ml-6
                   border-[#01384D] rounded  
                    font-bold mb-10 text-[white] 
                   bg-[#01384D] transition-all float-right"
          type="submit"
          onClick={()=>setShowAddModal(true)}
        >
          Qo'shish
        </button>
            </div>
      
          </div>
        {
              showAddModal && <TypeModal inputData={inputData} setShowAddModal={ setShowAddModal}  setInputData={setInputData} url={url}/>
        }
        
      </div>
     
    </div>
  );
};

export default Typies;

export function TypeModal({inputData, setShowAddModal , setInputData, url}){

    const token = JSON.parse(localStorage.getItem('token'))

    const handleSubmit = (e)=>{
        e.preventDefault()
        setInputData(inputDataModal.current.value)
    }

    const handleAdd = ()=>{
        setInputData(inputDataModal.current.value)
        if(inputData.current.value.length > 0){
            setShowAddModal(false)
        }
        const data = 
            {
                category:inputData,
                isActive:true
            }
        
        fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type':'aplication/json',
                'Authorization': token.token,
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((json) => setData(json));
    }

    const inputDataModal = useRef()
   
    return(
        <div className="w-[100%] h-[100%] fixed bg-[rgba(0,0,0,0.5)] right-0 left-0 top-0 py-[120px]">
            <div className="rounded w-[300px]  mx-auto bg-white box-border z-50">
                <button className="float-right rounded  px-4 py-3 bg-[#01384D]" onClick={()=>setShowAddModal(false)}>X</button>
                <h1 className="text-center text-[#01384D] text-[22px] font-[700] mb-6">Qo'shish</h1>
                <form onSubmit={handleSubmit} className="px-4" action="">
                    <label className="text-[#01384D] text-[18px]" htmlFor="modelType">Kategoriya nomi</label>
                    <input required ref={inputDataModal} className="w-[100%] border py-2  mb-3 px-2" type="text" id="" />
                    <button
        className="ms-0 px-6 py-3 border-2 ml-6 w-[100%]
                 border-[#01384D] rounded  
                  font-bold mb-10 text-[white] 
                 bg-[#01384D] transition-all"
        type="submit"
        onClick={()=>handleAdd()}
      >
        Qo'shish
      </button>
                </form>
            </div>
        </div>
    )
}
