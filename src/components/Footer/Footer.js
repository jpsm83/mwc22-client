import React from "react";

const Footer = () => {
  return (
    <div className="p-3 w-full bg-yellow-600">
      <a href="https://joao-resume.vercel.app" target="blank">
        <p className="font-bold sm:text-md text-shadow-lg text-sm text-gray-200 text-center mb-1">
          Created by Joao P S Machado
        </p>
      </a>
      <div className="sm:text-sm text-xs flex justify-center items-center text-yellow-400">
        <div className="cursor-pointer text-right">
          <a href="https://github.com/jpsm83/mwc22-server" target="blank">
            <p className="font-bold mr-1">Backend</p>
            <p className="sm:text-sm mr-1">Code</p>
          </a>
        </div>
        <img
          src="/img/github.webp"
          alt="Github logo"
          className="w-10 flex-shrink-0 mx-2 md:flex"
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
