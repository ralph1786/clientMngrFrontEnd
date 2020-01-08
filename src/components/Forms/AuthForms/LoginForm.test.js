import React from "react";
import { shallow } from "enzyme";
import { LoginForm } from "./LoginForm";
import sinon from "sinon";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<LoginForm />);
});

it("provides snapshot of LoginFrom", () => {
  expect(wrapper).toMatchSnapshot();
});

// it("checks the form is submitted", () => {
//   const spy = sinon.spy();
//   const fakeFunc = {
//       preventDefault: () => {

//       }
//   }
//   wrapper.setProps({loginProvider: () => {}})
//     wrapper.find("form").simulate("submit", fakeFunc)
//   expect(spy).toHaveBeenCalled();
// });
