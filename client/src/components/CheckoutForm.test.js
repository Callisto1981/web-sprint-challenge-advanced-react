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
  const { getAllByTestId } = render(<CheckoutForm />);

  const success = getAllByTestId(/success message/i);

  fireEvent.change(success, { value: "successMessage" });

  expect(success.value).toBe(/"successMessage"/i);

  fireEvent.click(q(/submit!/i));
});
