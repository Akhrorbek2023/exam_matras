import React, { useState, useEffect } from 'react'
import UserP from "../../../assets/images/User.svg"
import { useFetch } from '../../hooks/Fetch';
import { Switch } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { SwitchOrder } from '../switch/Switch';

const Orders = () => {

    const [data, setData] = useState([])
    const url = "http://localhost:1212/admin/orders/1";

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    fetch(url,{
        headers:{
            'Authorization': token.token
        }
    })
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);
 console.log(data);
  return (
    <div>
        <div className='bg-[#01384D] py-6 px-4 flex justify-between'>
            <form action="">
                <div className='border-2 bg-white inline-block px-4 py-1 rounded'>
                    <input className='placeholder-black ring-0 outline-none' type="text" id='adminSearch' placeholder='User' />
                    <label htmlFor="adminSearch"><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
                </div>
            </form>
            <div className='flex items-center'>
                <div><img  className='bg-white px-3 py-2 rounded-[50%]' src={UserP} alt="" /></div>
                <h1 className='text-white ml-4'>Jonh Doe</h1>
            </div>
        </div>
        <div className='px-8 py-4'>
            <table className='w-[100%]'>
                <tr className='bg-[#01384D] text-white py-4'>
                    <th className='py-3'>
                        <h1>ID</h1>
                    </th>
                    <th>
                        <h1>Ismi</h1>
                    </th>
                    <th>
                        <h1>Tel Raqami</h1>
                    </th>
                    <th>
                        <h1>Mahsilot nomi</h1>
                    </th>
                    <th>
                        <h1>Miqdor</h1>
                    </th>
                    <th>
                        <h1>Qayta aloqa</h1>
                    </th>
                </tr>
                {
                    data.map((item)=>(
                        <tr className='border' key={item.id}>
                        <th className='py-3'><h1>{item.id}</h1></th>
                        <th><h1>{item.name}</h1></th>
                        <th><h1>{item.number}</h1></th>
                        <th><h1>{item.product_name}</h1></th>
                        <th><h1>{item.count}</h1></th>
                        <th><span><SwitchOrder/></span></th>
                    </tr>
                    ))
                }
            
            </table>
        </div>
    </div>
  )
}

export default Orders


