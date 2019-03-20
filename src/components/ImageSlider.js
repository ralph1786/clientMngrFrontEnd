import React from "react";
import "./ImageSlider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageSlider = () => {
  return (
    <Carousel infiniteLoop={true} autoPlay={true}>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2016/06/09/02/48/crayons-1445057_1280.jpg"
          alt="slider"
        />
      </div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/21/19/09/child-2666462_1280.jpg"
          alt="slider"
        />
      </div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2017/05/07/22/37/kids-2293835_1280.jpg"
          alt="slider"
        />
      </div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2018/09/13/22/47/toys-3675934_1280.jpg"
          alt="slider"
        />
      </div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/28/10/48/child-1864718_1280.jpg"
          alt="slider"
        />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
