import React from "react";
import { Provider } from "react-redux";
import { render as rtlRender, screen, prettyDOM } from "@testing-library/react";
import { Route, MemoryRouter, Routes } from "react-router-dom";

import { createStore } from "redux";

import phones from "./mock/phones";
import reducer from "./store/reducer"; // to access rest of reducers

const MemoryRouterWithInitialRoutes = ({
  children,
  initialRoutes,
  initialState,
  store,
}) => {
  return (
    <MemoryRouter initialEntries={initialRoutes}>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
};

const render = (
  ui,
  {
    initialState = { phones },
    store = createStore(reducer, initialState),
    initialRoutes = ["/"],
    ...options
  } = {}
) => {
  return rtlRender(ui, {
    wrapper: (args) => {
      return MemoryRouterWithInitialRoutes({
        ...args,
        store,
        initialState,
        initialRoutes,
      });
    },
    initialState,
    store,
    ...options,
  });
};

export * from "@testing-library/react";

// override render method
export { render };
