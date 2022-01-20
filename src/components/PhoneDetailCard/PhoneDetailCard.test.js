import React from "react";
import { render, screen } from "@testing-library/react";

import Phones from "../../mock/phones";
const getPhoneById = (id) => {
  return { ...Phones.find((n) => Number(n.id) === Number(id)) };
};

import PhoneDetailCard from "./PhoneDetailCard";

describe("the phone detail card", () => {
  it("should display the price in US format by default", () => {
    let phone = getPhoneById(1);
    render(<PhoneDetailCard phone={phone} />);
    // note to self
    // queryBy and findBy - wont throw errors if not found
    // getByText will
    screen.getByText("$823.00");
  });
  it("should display format the price based on the locale passed in", () => {
    let phone = getPhoneById(1);
    render(<PhoneDetailCard phone={phone} locale="de-DE" currency="EUR" />);
    screen.getByText("823,00 €");
  });
});
