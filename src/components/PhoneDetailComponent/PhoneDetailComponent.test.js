import React from "react";
import App from "../../App";
import { render, prettyDOM } from "../../test-utils";
import userEvent from "@testing-library/user-event";
/*
Did a bunch of refactoring to get this closer to a proper test setup
- in the index.js - pulled a bunch of stuff out into it's own App component
- setup the test-utils to wrap things in a store, router, etc 
- still probably lots of room for improvement
- Although now we are getting closer to having a test that is closer to how the app runs, making use of router, redux, etc
- This is part of why we are now importing `App` instead of PhoneDetailsComponent, because we are now able
  to set the routes (initialRoute, etc), and we know what we expect, is when on the route /phones/123 - that a 
  specific phone is displayed
- We can also mimic user events, like clicking on the button to go back to the phone details screen
  and clicking on another phone item, and seeing that the details that display are what we expect
*/
describe("rendering a phone detail component", () => {
  let phone;

  it("should display the price with default us formatting", () => {
    const comp = render(<App />, {
      initialRoutes: ["/phones/1"],
    });

    comp.getByTestId("phone-id-1");
    comp.getByText("Apple iPhone 5c");
    comp.getByText("$823.00");
  });

  it("should navigate back to the phones list and --- etc etc", async () => {
    //const user = userEvent.setup(); --- setup is part of the 14.0, currently on 13.5 --- update later

    const comp = render(<App />, { initialRoutes: ["/phones/123"] });
    comp.getByText("$674.00");
    // comp.getByText("$674.0x0");
    await userEvent.click(comp.getByTestId("back-to-phones"));
    comp.getByText("All Phones");
    await userEvent.click(comp.getByTestId("btn-phone-details-1"));
    comp.getByTestId("phone-id-1");
    comp.getByText("Apple iPhone 5c");
    // comp.getByText("$823.0x"); // negative test to check fail
    comp.getByText("$823.00");
    //console.log(prettyDOM(comp.container.firstChild));
  });
});

// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks
// https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks/58206121#58206121
// https://javascript.plainenglish.io/testing-react-apps-that-use-react-router-ea86377db1c8
// https://react-testing-examples.com/jest-rtl/react-router/
// https://beta.reactjs.org/learn/conditional-rendering
// https://redux.js.org/usage/writing-tests#connected-components
// https://testing-library.com/docs/react-testing-library/api#render-result
// https://testing-library.com/docs/example-react-router
