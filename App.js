import React, { useState } from "react";
import BookingForm from "./BookingForm";

const App = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "6:00 PM",
    "7:00 PM",
  ]);

  const handleBooking = (formData) => {
    // Logic to manage booking and update available times
    console.log("Booking Data:", formData);
    // Assuming the time booked is now unavailable, remove it
    setAvailableTimes((prevTimes) =>
      prevTimes.filter((time) => time !== formData.time)
    );
  };

  return (
    <div className="App">
      <h1>Welcome to Little Lemon</h1>
      <BookingForm availableTimes={availableTimes} handleBooking={handleBooking} />
    </div>
  );
};

export default App;
