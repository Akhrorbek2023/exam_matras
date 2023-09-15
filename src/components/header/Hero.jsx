import Banner from "../../assets/images/background-header.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "@material-tailwind/react";
import { useFetch } from "../hooks/Fetch";
import { useState } from "react";

const Hero = () => {
  const url = "http://localhost:1212/api/carousel";
  const { data, isPending, error } = useFetch(url);

  console.log(data);

  return (
    <div className="py-10">
      {isPending && <div>Loading...</div>}
      {error && <div>Error</div>}
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-3">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 w-6 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {data?.map((item) => (
          <div className="relative" key={item.id}>
            <div className="">
              <h1 className="w-[70%] text-[90px] text-[#01384D] text-start font-[700] mb-10">
                {item.title}
              </h1>
              <div className="w-[18%]">
                <button className="ms-0 px-4 py-2 border-2 border-blue-500 rounded text-[20px] bg-white font-bold mb-10 hover:text-[white] hover:bg-[#01384D] transition-all">
                  Kategoriyalar <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
              {/* <ul className="flex mb-20">
            <li>
                <div className="w-[50px] h-[7px] bg-white"></div>
            </li>
            <li>
                <div className="w-[50px] h-[7px] bg-white"></div>
            </li>
            <li>
                <div className="w-[50px] h-[7px] bg-white"></div>
            </li>
            <li>
                <div className="w-[50px] h-[7px] bg-white"></div>
            </li>
        </ul> */}
            </div>
            <img
              className="absolute right-0 bottom-0 mr-0 h-[400px]"
              src={Banner}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
