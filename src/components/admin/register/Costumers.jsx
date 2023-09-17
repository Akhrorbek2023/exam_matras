import React from "react";
import UserP from "../../../assets/images/User.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { SwitchOrder } from "../switch/Switch";

const Costumers = () => {
  return (
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
          <table className="w-[100%] text-center">
            <tr className="bg-[#01384D] text-white py-4">
              <th className="py-3">
                <h1>ID</h1>
              </th>
              <th>
                <h1>Sana</h1>
              </th>
              <th>
                <h1>Tel Raqami</h1>
              </th>
              <th>
                <h1>Qayta aloqa</h1>
              </th>
              <th className="w-[40%]">
                <h1 className="w-[70%]"></h1>
              </th>
              <th>
                <h1></h1>
              </th>
              <th></th>
              <th></th>
            </tr>
            <tr className="border">
              <td className="py-3">
                <h1>6</h1>
              </td>
              <td>
                <h1>2054</h1>
              </td>
              <td>
                <h1>+998901234157</h1>
              </td>
              <td>
                <span>
                  <SwitchOrder />
                </span>
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
          </table>
        </div>
      </div>
    </div>
  );
};

export default Costumers;
