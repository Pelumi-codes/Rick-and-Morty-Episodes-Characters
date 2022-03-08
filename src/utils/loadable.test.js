import React from "react";
import renderer from "react-test-renderer";

import  loadable from "./loadable"
it("renders list of characters", () => {
  const tree = renderer.create(<loadable/>).toJSON();
  expect(tree).toMatchSnapshot();
});