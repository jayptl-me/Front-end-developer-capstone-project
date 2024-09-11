import React, { useState } from "react";

const BookingForm = ({ availableTimes, handleBooking }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";
    if (formData.guests < 1) errors.guests = "At least 1 guest is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      handleBooking(formData); // Trigger the booking process
      alert("Booking successful!");
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Table</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {formErrors.name && <p className="error">{formErrors.name}</p>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {formErrors.email && <p className="error">{formErrors.email}</p>}

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      {formErrors.date && <p className="error">{formErrors.date}</p>}

      <label htmlFor="time">Time:</label>
      <select name="time" value={formData.time} onChange={handleChange}>
        <option value="">Select a time</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      {formErrors.time && <p className="error">{formErrors.time}</p>}

      <label htmlFor="guests">Number of Guests:</label>
      <input
        type="number"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
      />
      {formErrors.guests && <p className="error">{formErrors.guests}</p>}

      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
