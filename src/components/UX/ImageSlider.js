import React from "react";
import "./ImageSlider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";

const ImageSlider = () => {
  return (
    <Carousel infiniteLoop={true} autoPlay={true}>
      <div>
        <img src={`${image1}`} alt="slider" />
      </div>
      <div>
        <img src={`${image2}`} alt="slider" />
      </div>
      <div>
        <img src={`${image3}`} alt="slider" />
      </div>
      <div>
        <img src={`${image4}`} alt="slider" />
      </div>
      <div>
        <img src={`${image5}`} alt="slider" />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
