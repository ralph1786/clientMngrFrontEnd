import React from "react";
import { shallow } from "enzyme";
import ImageSlider from "./ImageSlider";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ImageSlider />);
});

it("makes a snapshot of the ImageSlider component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("checks there are five images in ImageSlider component", () => {
  //find returns an array of all img tags.
  expect(wrapper.find("img")).toHaveLength(5);
});
