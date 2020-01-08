import React from "react";
import { shallow } from "enzyme";
import CancelButton from "./CancelButton";

it("checks that only one <Link/> is displayed", () => {
  const wrapper = shallow(<CancelButton />);
  expect(wrapper.find(".cancel-button")).toHaveLength(1);
});
