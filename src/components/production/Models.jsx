import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/Fetch";
import Box from "./Box";
import BoxA from "./BoxA";

import {
  ModelAll,
  ModelA,
  ModelAplus,
  ModelBplus,
  ModelC,
  ModelCplus,
  ModelD,
  ModelNew,
  ModelYevro,
} from "./ModelTypes";

const Models = () => {
  const url = "http://localhost:1212/api/products";

  const { data, isPending, error } = useFetch(url);

  console.log(data);

  const [page, setPage] = useState([]);

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBtn = (category) => {
    if (data?.products) {
      let items = [];
      for (const item of data.products) {
        if (item.category == category || !category) {
          items.push(item);
        }
      }
      setPage(items);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-[50px] font-[700] text-[#01384D] text-center mb-[30px]">
          Bizning mahsulotlar
        </h1>
        <form className="flex text-[20px]" onSubmit={handleSubmit}>
          <button
            onClick={() => handleBtn()}
            className={
              { page }
                ? "focus:font-[700] focus:border-b-4 border-stone-900 mr-[35px] px-3 py-3 rounded hover:bg-slate-300 box-border "
                : "mr-[35px] px-3 py-3 rounded hover:bg-slate-300 box-border"
            }
          >
            Barchasi
          </button>
          {data?.categories?.map((item) => (
            <button
              onClick={() => handleBtn(item.category)}
              className={
                page
                  ? "focus:font-[700] focus:border-b-4 border-stone-900 mr-[35px] px-3 py-3 rounded hover:bg-slate-300 box-border "
                  : "mr-[35px] px-3 py-3 rounded hover:bg-slate-300 box-border"
              }
              key={item.id}
            >
              {item.category}
            </button>
          ))}
        </form>
      </div>
      <div className="border-solid border-b-4 mt-[-4px] mb-[30px]"></div>
      <div className="container">
        {page?.map((page) =>
          page.new_cost == null ? (
            <Box key={page.id}
              weight={page.weight}
              warranty={page.warranty}
              size={page.size}
              name={page.name}
              cost={page.cost}
              capacity={page.capacity}
              images={page.product_images}
              new_cost={page.new_cost}
            />
          ) : (
            <BoxA
             key={page.id}
              weight={page.weight}
              warranty={page.warranty}
              size={page.size}
              name={page.name}
              cost={page.cost}
              capacity={page.capacity}
              images={page.product_images}
              new_cost={page.new_cost}
            />
          )
        )}
        
        {}
      </div>
    </>
  );
};

export default Models;
