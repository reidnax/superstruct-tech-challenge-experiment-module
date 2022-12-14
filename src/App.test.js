import renderer from "react-test-renderer";
import App from "./App";

it("renders App", () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
