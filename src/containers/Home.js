import React, { Component, Fragment } from "react";
import ImageSlider from "../components/ImageSlider";
import Buttons from "../components/Buttons";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <ImageSlider />
        <Buttons />
      </Fragment>
    );
  }
}

export default Home;
