// BookingForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders booking form", () => {
  const availableTimes = ["12:00 PM", "1:00 PM"];
  render(<BookingForm availableTimes={availableTimes} handleBooking={() => {}} />);
  expect(screen.getByText(/Book a Table/i)).toBeInTheDocument();
});

test("form shows error when fields are empty", () => {
  const availableTimes = ["12:00 PM", "1:00 PM"];
  render(<BookingForm availableTimes={availableTimes} handleBooking={() => {}} />);
  fireEvent.click(screen.getByText(/Book Now/i));
  expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
});
