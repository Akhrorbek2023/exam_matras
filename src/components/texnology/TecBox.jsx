import React from "react";
import { useFetch } from "../hooks/Fetch";


const TecBox = () => {

  const url = "http://localhost:1212/api/technology";

  const { data, isPending, error } = useFetch(url);

  return (
    <>
    <div className="grid grid-cols-3 mb-10">
        {
            data?.map((item)=>(
                <div className="text-center mb-10 " key={item.id}>
                    <h1 className="text-[30px] font-[600] mb-4">{item.name}</h1>
                    <iframe className="h-[200px] w-[400px] mb-5"  src={item.link} ></iframe>
                    <p className="text-slate-500 px-10">{item.description}</p>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default TecBox;
