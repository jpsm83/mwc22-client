import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div>
      <div className="flex justify-center items-center h-32 overflow-hidden mx-3">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={4000}
        >
          <img
            className="min-w-full min-h-full shrink-0"
            loading="lazy"
            src="/img/barcelona.jpeg"
            alt="Barcelona"
          />
          <img
            className="min-w-full min-h-full shrink-0"
            loading="lazy"
            src="/img/developers.jpg"
            alt="Developer"
          />
          <img
            className="min-w-full min-h-full shrink-0"
            loading="lazy"
            src="/img/mwc-barcelona-2022.jpg"
            alt="MWC-22 Barcelona"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
