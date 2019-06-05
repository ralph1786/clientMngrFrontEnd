import React from "react";
import "./ImageSlider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assets/images/image1.jpg";

const ImageSlider = () => {
  return (
    <Carousel infiniteLoop={true} autoPlay={true}>
      <div>
        <img
          // src="https://images.pexels.com/photos/591652/play-fun-blocks-block-591652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          src={`${image1}`}
          alt="slider"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/6459/sand-summer-outside-playing.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="slider"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1089069/pexels-photo-1089069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="slider"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/207665/pexels-photo-207665.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="slider"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/159579/crayons-coloring-book-coloring-book-159579.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="slider"
        />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
