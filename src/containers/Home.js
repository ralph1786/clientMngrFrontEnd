import React, { Component } from "react";
import ImageSlider from "../components/ImageSlider";
import Buttons from "../components/Buttons";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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

export default withRouter(connect()(Home));
