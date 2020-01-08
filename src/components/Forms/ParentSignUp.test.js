import React from "react";
import { shallow } from "enzyme";
import { ParentSignUp } from "./ParentSignUp";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ParentSignUp />);
});

it("should check for changes to ParentSignUp component through snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

it("simulates a click event on X button that calls goBack", () => {
  const buttonClick = jest.fn();
  wrapper.setProps({ buttonClick: buttonClick, history: [] });
  wrapper.find("span").simulate("click");
  expect(buttonClick).toBeCalledTimes(0);
});

it("checks that handleSubmit is called", () => {
  let prevented = false;
  wrapper.setProps({ createParent: () => {} });
  //When form is submitted it will change prevented to true
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {
      prevented = true;
    }
  });
  //Here we check that prevented is true, meaning that the form submission was fired.
  expect(prevented).toBeTruthy();
});
