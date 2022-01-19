import React from "react";
import { render as rtlRender, screen, prettyDOM } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
// Import our reducer
import reducer from "../../store/reducer"; // to access rest of reducers
import PhoneDetailComponent from "./PhoneDetailComponent";

const render = (
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
describe("magic", () => {
  it("should work", () => {
    const comp = render(<PhoneDetailComponent />);
    const phone1 = comp.getByTestId("phone-idx-1");
    screen.getByTestId("phone-idx-1");
  });
});
