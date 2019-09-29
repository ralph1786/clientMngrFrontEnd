import React from "react";
import { shallow } from "enzyme";
import { Dashboard } from "./Dashboard";
import { ChildrenList } from "./ChildrenList";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Dashboard provider={{}} setProvider={() => {}} />);
});

it("creates a snapshot for the Dashboard component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("checks that the ChildrenList component is rendered", () => {
  expect(wrapper.find(ChildrenList)).toBeTruthy();
});
