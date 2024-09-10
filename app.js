import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './App.css';

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (data) => {
    setSubmitted(true);
    console.log('Form submitted: ', data);
  };

  return (
    <div className="App">
      <h1>Little Lemon Restaurant</h1>
      {!submitted ? (
        <BookingForm onSubmit={handleSubmit} />
      ) : (
        <h2>Thank you for booking a table!</h2>
      )}
    </div>
  );
}

export default App;
