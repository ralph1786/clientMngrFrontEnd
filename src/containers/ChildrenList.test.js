import React from "react";
import { shallow } from "enzyme";
import { ChildrenList } from "./ChildrenList";
import SearchBar from "../components/UX/SearchBar";
import { ChildCard } from "../components/ChildCard";

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <ChildrenList
      children={[]}
      searchTerm={""}
      allChildren={() => {}}
      search={() => {}}
    />
  );
});

it("captures a snapshot of the ChildrenList component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("contains the SearchBar component", () => {
  expect(wrapper.find(SearchBar)).toHaveLength(1);
});

it("expects to show a list of ChildCard components", () => {
  expect(wrapper.find(ChildCard)).toBeTruthy();
});
