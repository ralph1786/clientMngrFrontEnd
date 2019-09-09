import React from "react";
import { shallow } from "enzyme";
import { SideDrawer } from "./SideDrawer";
import SearchBar from "./SearchBar";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SideDrawer location={{ pathname: "/dashboard" }} />);
});

it("shows SearchBar component when pathname is /dashboard", () => {
  expect(wrapper.find(SearchBar)).toHaveLength(1);
});
