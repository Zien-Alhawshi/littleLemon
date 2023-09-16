import React from 'react';
import './ConfirmationPage.css'; // Import your CSS file for styling

const ConfirmationPage = () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h2>Booking Confirmed!</h2>
        <p>Thank you for making a reservation with us.</p>
        <p>Your booking has been successfully processed.</p>
        {/* You can add more details or any other content here */}
      </div>
    </div>
  );
};

export default ConfirmationPage;
