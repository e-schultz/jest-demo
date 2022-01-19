import React from "react";
import { render, screen } from "@testing-library/react";

// Import our reducer

import PhoneDetailCard from "./PhoneDetailCard";

describe("the phone detail card", () => {
  it("should display the price in US format by default", () => {
    // copy and pasted this from the mock/phones.js for now

    const phone = {
      id: "1",
      categoryId: "1",
      name: "Apple iPhone 5c",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
      price: 823,
      image: "/uploads/iphone5c-selection-hero-2013.png",
      cpu: "1.3GHz Apple A*",
      camera: "8mp (3264x2448)",
      size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
      weight: "132 grams (4.7 ounces) with battery",
      display: "4.0 326 pixel density",
      battery: "1480 mAh",
      memory: "16GB, 32GB, 64GB and RAM 1 GB",
    };
    render(<PhoneDetailCard phone={phone} />);
    // note to self
    // queryBy and findBy - wont throw errors if not found
    // getByText will
    screen.getByText("$823.00");
  });
  it("should display format the price based on the locale passed in", () => {
    // copy and pasted this from the mock/phones.js for now

    const phone = {
      id: "1",
      categoryId: "1",
      name: "Apple iPhone 5c",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
      price: 823,
      image: "/uploads/iphone5c-selection-hero-2013.png",
      cpu: "1.3GHz Apple A*",
      camera: "8mp (3264x2448)",
      size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
      weight: "132 grams (4.7 ounces) with battery",
      display: "4.0 326 pixel density",
      battery: "1480 mAh",
      memory: "16GB, 32GB, 64GB and RAM 1 GB",
    };
    render(<PhoneDetailCard phone={phone} locale="de-DE" currency="EUR" />);
    screen.getByText("823,00 €");
  });
});
