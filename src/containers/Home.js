import React, { Component } from "react";
import ImageSlider from "../components/ImageSlider";
import Buttons from "../components/Buttons";

class Home extends Component {
  render() {
    return (
      <div>
        <ImageSlider />
        <Buttons />
      </div>
    );
  }
}

export default Home;
