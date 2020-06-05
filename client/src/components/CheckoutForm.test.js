import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<App />);
  const header = getByText(/react plant/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByTestId, getByText } = render(<CheckoutForm />);
  //this is where we want to test the inputs
  const firstname = getByText(/first name/i);
  const lastname = getByText(/last name/i);
  const address = getByText(/address/i);
  const city = getByText(/city/i);
  const state = getByText(/state/i);
  const zip = getByText(/zip/i);

  //fireEvent.change(success, { value: "successMessage" });
  fireEvent.change(firstname, { value: "firstname" });
  fireEvent.change(lastname, { value: "lastname" });
  fireEvent.change(address, { value: "address" });
  fireEvent.change(city, { value: "city" });
  fireEvent.change(state, { value: "state" });
  fireEvent.change(zip, { value: "zip" });
  fireEvent.click(getByText(/checkout!/i));

  const success = getByTestId("successFirstName");

  expect(success).toBeInTheDocument("successFirstName");
});
