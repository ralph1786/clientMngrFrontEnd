import React from "react"
import {shallow} from "enzyme";
import {NavbarMenu} from "./NavbarMenu"


let wrapper;

beforeEach(() => {
    wrapper = shallow(<NavbarMenu/>)
})

it("shows New Child button when provider logged in", () =>{
    wrapper.setProps({pathname: "/edit"})
    expect(wrapper.find("button").at(1).text()).toEqual("New Child")
})