import React from "react";

const Footer = () => {
  return (
    <div className="p-4 w-full  bg-gray-200">
      <h3 className="font-bold text-gray-600 text-center mb-2">
        Created by Joao P S Machado
      </h3>
      <div className="sm:text-md flex justify-center items-center text-gray-400">
        <div className="cursor-pointer text-right">
          <a href="https://github.com/jpsm83/mwc22-server" target="blank">
            <p className="font-bold mr-1">Backend</p>
            <p className="sm:text-sm mr-1">Code</p>
          </a>
        </div>
        <img
          src="./img/github.webp"
          alt="Food logo"
          className="w-12 flex-shrink-0 mx-2 md:flex z-10"
        />
        <div className="cursor-pointer text-left">
          <a href="https://github.com/jpsm83/mwc22-client" target="blank">
            <p className="font-bold ml-1">Frontend</p>
            <p className="sm:text-sm ml-1">Code</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
