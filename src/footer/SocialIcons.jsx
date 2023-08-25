import React from "react";
import {BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <BsFacebook/>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <BsInstagram/>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <BsLinkedin/>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <BsGithub/>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <BsTwitter/>
        </span>
    </div>
  );
};

export default SocialIcons;