import React from "react";
import { MdOutlineMonitor } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoComment } from "react-icons/go";

const BannerBottom = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-0 lg:flex-row justify-center items-center h-auto lg:h-60 bg-pink-400 text-white py-10 px-8 -mt-20 z-50">
      <div className="w-full lg:w-[60%] flex flex-col gap-3">
        <h3 className="font-bold text-xl md:text-3xl text-black">
          These 7 things will change the way you approach travel!
        </h3>
        <p className="text-xs text-black">Camila Hoffman / 4 weeks ago</p>
      </div>
      <div className="w-full lg:w-[40%] flex items-center justify-center gap-8">
        <div className="w-full flex flex-col items-center group">
          <MdOutlineMonitor className="text-4xl text-gray-300 group-hover:text-white duration-300" />
          <p className="text-xs md:text-sm font-titleFont text-black group-hover:text-white">
            Watch on YouTube
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center group">
          <IoMdHeartEmpty className="text-4xl text-gray-300 group-hover:text-white duration-300" />
          <p className="text-xs md:text-sm font-titleFont text-black group-hover:text-white">
            Like our content
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center group">
          <GoComment className="text-4xl text-gray-300 group-hover:text-white duration-300" />
          <p className="text-xs md:text-sm font-titleFont text-black group-hover:text-white">
            Leave a comment
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
