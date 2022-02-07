/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative h-120 flex justify-center items-center overflow-hidden">
    <img src="/img/mwc-logo.png" alt="mwc logo" className="h-40 absolute top-0 left-0 z-10"/>
      <div className="absolute w-full h-40 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2000}
      >
        <div>
          <img
            className="object-cover shrink-0"
            loading="lazy"
            src="/img/image-1.jpg"
            alt="Image 1"
          />
        </div>
        <div className=" object-contain">
          <img
            className="object-cover shrink-0"
            loading="lazy"
            src="/img/image-2.jpg"
            alt="Image 2"
          />
        </div>
        <div className=" object-contain">
          <img
            className="object-cover shrink-0"
            loading="lazy"
            src="/img/image-3.jpg"
            alt="Image 3"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
