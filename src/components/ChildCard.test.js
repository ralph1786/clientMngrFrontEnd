import React from "react";
import ChildCard from "./ChildCard";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ChildCard />);
});

it("shows snapshot of ChildCard component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("checks that the child prop is not null", () => {
  expect(wrapper.props()).not.toBeNull();
});
