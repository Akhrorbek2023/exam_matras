import React, { useState } from "react";
import { Link } from "react-router-dom";

import Home from "../../../assets/images/adminHome.svg";
import Locations from "../../../assets/images/adminLocation.svg";
import Tech from "../../../assets/images/adminTech.svg";
import Prod from "../../../assets/images/adminProd.svg";
import Type from "../../../assets/images/adminType.svg";
import User from "../../../assets/images/adminUser.svg";
import Logo from "../../../assets/images/adminLogo.svg";
import Matrassua from "../../../assets/images/Matrassue.svg";
import Orders from "./Orders";
import Costumers from "./Costumers";
import Typies from "./Typies";
import Products from "./Products";
import Technologies from "./Technologies";
import Location from "./Location";

const AdminPanel = () => {
  const baseData = [
    {
      id: 2,
      href: "/admin/orders",
      name: "Buyurtmalar",
      pic: Home,
      page: <Orders />,
    },
    {
      id: 3,
      href: "/admin/costumers",
      name: "Customers",
      pic: User,
      page: <Costumers />,
    },
    {
      id: 4,
      href: "/admin/typies",
      name: "Toifalar",
      pic: Type,
      page: <Typies />,
    },
    {
      id: 5,
      href: "/admin/products",
      name: "Mahsulotlar",
      pic: Prod,
      page: <Products />,
    },
    {
      id: 6,
      href: "/admin/technology",
      name: "Texnologiyalar",
      pic: Tech,
      page: <Technologies />,
    },
    {
      id: 7,
      href: "/admin/location",
      name: "Manzil",
      pic: Locations,
      page: <Location />,
    },
  ];
  const [showPage, setShowPage] = useState(<Orders />);
  const handlePage = (id) => {
    baseData.filter((item) => {
      if (id == item.id) {
        setShowPage(item.page);
      }
    });
  };
  return (
    <div className="h-[100%]">
      <div className="flex">
        <div className="block w-[20%] bg-[#01384D] text-white h-[100vh]">
          <ul className="">
            <li>
              <Link className="flex items-center px-4 py-7" to="/admin/">
                <img src={Logo} alt="" />
                <img
                  className="text-[#01384D] bg-[#01384D]"
                  src={Matrassua}
                  alt=""
                />
              </Link>
            </li>
            {baseData?.map((item) => (
              <li>
                <Link
                  onClick={() => handlePage(item.id)}
                  className={
                    showPage
                      ? "focus:bg-[#EABF9F] flex items-center py-4 px-3 hover:bg-[#EABF9F]"
                      : "flex items-center py-4 px-3 hover:bg-[#EABF9F]"
                  }
                  to={item.href}
                >
                  <img className="mr-4" src={item.pic} alt="" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[100%]">{showPage}</div>
      </div>
    </div>
  );
};

export default AdminPanel;
