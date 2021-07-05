import React from "react";
import Images from "./Images";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "./Carousel";

const ImageSlider = () => {
  return (
    <div className="row">
      <OwlCarousel
        className="owl-theme wrapper col-lg-10 mx-auto mt-5"
        loop
        margin={10}
        autoplay={true}
        items={3}
        center={true}
      >
        {Images.map((i, index) => {
          return (
            <>
              <Carousel imgsrc={i.image} />
            </>
          );
        })}
      </OwlCarousel>
    </div>
  );
};

export default ImageSlider;
