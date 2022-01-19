import React from "react";
import { render as rtlRender, screen, prettyDOM } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
// Import our reducer
import reducer from "../../store/reducer"; // to access rest of reducers
import PhoneDetailComponent from "./PhoneDetailComponent";

const render = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(
    <Router history={history}>
      <Route path={route}>{ui}</Route>
    </Router>,
    { wrapper: Wrapper, ...renderOptions, history }
  );
};
describe("magic", () => {
  it("should work", () => {
    const comp = render(
      <Route path="/phones/:id">
        <PhoneDetailComponent />
      </Route>,
      {
        route: "/phones/1",
      }
    );
    const phone1 = comp.getByTestId("phone-idx-1");
    screen.getByTestId("phone-idx-1");
  });
});
