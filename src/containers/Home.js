import React, { Component, Fragment } from "react";
import ImageSlider from "../components/UX/ImageSlider";
import Buttons from "../components/UI/Buttons";

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
