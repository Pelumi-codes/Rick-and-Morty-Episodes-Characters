import React from "react";
import renderer from "react-test-renderer";

import  Loader from "./Loadable";
it("renders list of characters", () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});