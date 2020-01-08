import React from "react";
import { CreateForm } from "./CreateForm";
import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CreateForm history={{ location: {} }} />);
});

it("provide a snapshot of the CreateForm component", () => {
  expect(wrapper).toMatchSnapshot();
});

it("checks that a form is being rendered", () => {
  expect(wrapper.find("form")).toBeTruthy();
});
