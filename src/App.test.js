import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import App from "./App";
import sunImage from "./sun.png";
import { render, fireEvent } from "@testing-library/react";

describe("App", () => {
  let wrapper = mount(<App />);

  it("renders the component", () => {
    expect(wrapper).not.toBeNull();
  });

  it("renders the selection to choose a City", () => {
    expect(wrapper.find("select").text()).toEqual("JakartaSingaporeBangkok");
  });

  it("renders the initial table", () => {
    expect(wrapper.find("table")).not.toBeNull();
  });

  it("renders the sun image", () => {
    expect(wrapper.find("img").prop("src")).toEqual(sunImage);
  });

  it("table changes appropriately upon selection", async () => {
    //Arrange
    const { getByTestId } = render(<App />);
    const selectTag = getByTestId("select-tag");
    const tableTag = getByTestId("table-tag");

    //Act
    fireEvent.change(selectTag, {
      target: { value: "Bangkok" }
    });

    //Assert
    expect(tableTag.textContent).toEqual("Bangkok");
  });
});
