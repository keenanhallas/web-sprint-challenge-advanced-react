import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByTestId} = render(<CheckoutForm />);
    const formHeader = getByTestId(/checkoutForm/i);
    const firstNameField = getByTestId(/firstName/i);
    fireEvent.change(firstNameField, { target: { value: 'checkout form' } });
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const {getByTestId} = render(<CheckoutForm />);

    const firstName = getByTestId(/firstName/i);
    const lastName = getByTestId(/lastName/i);
    const address = getByTestId(/address/i);
    const city = getByTestId(/city/i);
    const state = getByTestId(/state/i);
    const zip = getByTestId(/zip/i);
    const checkoutButton = getByTestId(/checkoutButton/i);
    //const successMessage = getByTestId(/successMessage/i); this fails because the element isn't mounted yet - I'm sure there's a better way to test this

    fireEvent.change(firstName, { target: { value: 'Keenan' } });
    fireEvent.change(lastName, { target: { value: 'Hallas' } });
    fireEvent.change(address, { target: { value: '123 Main St.' } });
    fireEvent.change(city, { target: { value: 'Louisville' } });
    fireEvent.change(state, { target: { value: 'Kentucky' } });
    fireEvent.change(zip, { target: { value: '12345' } });

    fireEvent.click(checkoutButton);
    const successMessage = getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();
});
