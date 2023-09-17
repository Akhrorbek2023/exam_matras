import React from 'react'
import { useState, useRef } from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import Register from './register/Register';

const Admin = () => {


    const [registred, setRegistred] = useState(false)
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || '') 
    console.log(token);

  const userName = useRef('')
  const userParol = useRef('')

    function handleSubmit(e){
      e.preventDefault()
      let obj = {
        userName: userName.current.value,
        password: userParol.current.value
      }
        console.log(obj);
        fetch('http://localhost:1212/admin/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(obj)
        }) .then(res =>res.json()).then(data => {
          if(data.token){
            setToken(data)
            localStorage.setItem('token',JSON.stringify(data));
          }
        })
    }


 
  return (
    <div>
        {
            !token ? <div className='pt-40'>
            <div className='w-[340px] px-5 pt-5 border rounded mx-auto'>
                <form onSubmit={handleSubmit}>
                    <h1 className='text-center text-[20px] text-[#01384D] mb-6'>Kirish</h1>
                    <input ref={userName} className='w-[100%] border px-2 py-3 rounded mb-6' type="text" placeholder='Login'/>
                    <input ref={userParol} className='w-[100%] border px-2 py-3 rounded mb-6' type="password" placeholder='Parol' />
                    <button className="ms-0 px-6 py-3 border-2 ml-6
                 border-[#01384D] rounded  
                  font-bold mb-10 text-[white] 
                 bg-[#01384D] transition-all w-[100%]" onClick={()=>setRegistred(true)}>Kirish</button>
                </form>
            </div>
        </div> : <Register/>
        }
    </div>
  )
}

export default Admin