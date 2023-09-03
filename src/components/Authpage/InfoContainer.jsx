import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";

const InfoContainer = () => {
  return (
    <div className="bg-white text-black w-1/3 p-4 info-container">
      <div className="logo-container">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800 w-fit my-0 mx-auto">
          <span className="text-3xl text-orange-500 mr-2">
            <MdOutlineMenuBook />
          </span>
          <span>BLOG STORE</span>
        </div>
      </div>
      <div className="text-2xl mt-2 info">
        <p>
          Read and write blogs Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <p>Read and write blogs Lorem ipsum dolor sit amet.</p>
        <p>consectetur adipiscing elit.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          ipsum ad, ullam dolorem, nemo non ab libero nesciunt at ut cum
          doloribus eligendi voluptatum dignissimos. Assumenda earum labore
          laborum non.
        </p>
      </div>
    </div>
  );
};

export default InfoContainer;
