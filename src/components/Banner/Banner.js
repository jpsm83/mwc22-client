import React from "react";

const Banner = () => {
  return (
    <div className="relative h-200">
            <img
          src="/img/image-2.jpg"
          alt="developers"
          className="relative"
        />

      <img
        src="/img/mwc-logo.png"
        alt="mwc logo"
        className="absolute h-40 top-0 left-0 z-20"
      />
      <div className="absolute w-full h-40 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10" />
    </div>
  );
};
export default Banner;