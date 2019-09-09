import React from "react";
import { EditForm } from "./EditForm";
import { shallow } from "enzyme";
import sinon from "sinon";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<EditForm editChild={{}} location={{}} />);
});

it("creates a snapshot of EditForm", () => {
  expect(wrapper).toMatchSnapshot();
});

it("form submission works", () => {
  const fakeEvent = {
    preventDefault: () => {}
  };
  wrapper.setProps({ updateChild: () => {}, history: [] });
  expect(
    wrapper.find("form").simulate("submit", fakeEvent).calledOnce
  ).toBeUndefined();
});
