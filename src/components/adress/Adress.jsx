import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/Fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Adress = () => {
  const url = "http://localhost:1212/api/address";

  const { data, isPending, error } = useFetch(url);

  return (
<div className="mb-10">
      <div className="container">
        <div>
          {data?.map((item) => (
            <div className="flex justify-between">
              <div>
                <h1 className="text-[50px] font-[700] text-[#01384D] mb-10">Manzilimiz</h1>
                <h1 className="text-[30px] font-[600] text-[#01384D] mb-6">{item.location}</h1>
                <p className="mb-10">{item.destination}</p>
                <Link
                  className="ms-0 px-4 py-2 border-2 border-blue-500 rounded bg-white font-bold mb-10 text-2xl hover:text-[white] hover:bg-[#01384D]"
                  to={item.geolacation}
                >
                  <FontAwesomeIcon icon={faLocationDot} /> Geolocation{" "}
                </Link>
              </div>
              <div>
                <img src={item.images} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adress;
