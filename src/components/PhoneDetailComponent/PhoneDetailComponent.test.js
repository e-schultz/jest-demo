import React from "react";
import { render as rtlRender, screen, prettyDOM } from "@testing-library/react";
import { Route, MemoryRouter, Routes } from "react-router-dom";

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
    initialEntries = ["/phones/1"],
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>{children}</Routes>
        </MemoryRouter>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

describe("rendering a phone detail component", () => {
  it("should work", () => {
    const comp = render(
      <Route path="/phones/:id" element={<PhoneDetailComponent />}></Route>
    );
    comp.getByTestId("phone-id-1");
    comp.getByText("Apple iPhone 5c");
    comp.getByText("$823.00");
  });
});

// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks
// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks/58206121#58206121
