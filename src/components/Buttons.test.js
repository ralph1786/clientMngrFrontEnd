import React from "react";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import { shallow } from "enzyme";

it("makes a snapshot of component", () => {
  const wrapper = shallow(<Buttons />);
  expect(wrapper).toMatchSnapshot();
});

it("should have two <Link/> components", () => {
  const wrapper = shallow(<Buttons />);
  expect(wrapper.find(Link)).toHaveLength(2);
});

it("expects first button to say Provider", () => {
  const wrapper = shallow(<Buttons />);
  expect(
    wrapper
      .find("button")
      .first()
      .text()
  ).toEqual("Provider");
});
