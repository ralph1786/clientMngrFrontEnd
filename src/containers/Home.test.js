import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import Buttons from "../components/Buttons";
import ImageSlider from "../components/ImageSlider";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Home />);
});

it("creates a snapshot of the Home component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("checks that the ImageSlider component is rendered", () => {
  expect(wrapper.find(ImageSlider)).toBeTruthy();
});

it("checks that the Buttons component is rendered", () => {
  expect(wrapper.find(Buttons)).toBeTruthy();
});
