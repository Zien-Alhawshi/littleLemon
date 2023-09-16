import React, { useState } from "react";
import "./BookingForm.css";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { fetchAPI, submitAPI } from '../util/api'; // Adjust the path as needed

const BookingForm = () => {
  const navigate = useNavigate();


  const initialAvailableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];


  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState("Birthday");
  const [bookedTimes, setBookedTimes] = useState([]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);


  // Function to filter booked times for the selected date
  const filterBookedTimes = (date) => {
    return bookedTimes.filter((time) => time.date === date).map((time) => time.time);
  };
  const fetchAvailableTimes = (date) => {
    // Call the API to fetch available times for the selected date
    // Use the date parameter to make the API request
    // Replace 'API_ENDPOINT' with the actual API endpoint
    fetchAPI(date) // Assuming 'fetchAPI' is available globally
      .then((times) => {
        // Update the available times state with the API response
        setAvailableTimes(times);
      })
      .catch((error) => {
        console.error('Error fetching available times:', error);
      });
  };
  useEffect(() => {
    if (selectedDate) {
      fetchAvailableTimes(selectedDate);
    }
  }, [selectedDate]);

  const handleFormSubmit = async  (e) => {

    e.preventDefault();

  
    // Get the selected date and time from the form
    const selectedDate2 = selectedDate;
    const selectedTime2 = selectedTime;
  
    // Check if the selected date and time are already booked
    const isAlreadyBooked = bookedTimes.some(
      (bt) => bt.date === selectedDate2 && bt.time === selectedTime2
    );
  
    if (isAlreadyBooked) {
      // Display an error message or handle it as needed
      alert("This date and time are already booked. Please choose another.");
    } else {
      const formData = {
        date: selectedDate2,
        time: selectedTime2,
        guests: numberOfGuests,
        occasion: selectedOccasion,
      };
      try {
        // Call the submitAPI function and await the result
        const isSuccess = await submitAPI(formData);

        if (isSuccess) {
          // Update the bookedTimes state with the user's input
          setBookedTimes([...bookedTimes, { date: selectedDate2, time: selectedTime2 }]);

          // Filter booked times for the selected date
          const bookedTimesForSelectedDate = filterBookedTimes(selectedDate2);

          // Update availableTimes based on the selected date and filtered booked times
          setAvailableTimes((prevTimes) =>
            prevTimes.filter((time) => !bookedTimesForSelectedDate.includes(time))
          );

          // Reset the form
          setSelectedDate("");
          setSelectedTime("");
          setNumberOfGuests(1);
          setSelectedOccasion("Birthday");

          // Set the form submission flag to true
          setIsFormSubmitted(true);

          // Navigate to the confirmation page
          navigate("/Confirm");
        } else {
          // Handle submission failure (e.g., display an error message)
          alert("Booking submission failed. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        // Handle any errors that occur during submission
      }
    }
  };

  // Get available times based on the selected date and filtered booked times
  const availableTimesForSelectedDate = filterBookedTimes(selectedDate);

  // Update available times
  const [availableTimes, setAvailableTimes] = useState(
    initialAvailableTimes.filter((time) => !availableTimesForSelectedDate.includes(time))
  );

  return (
    <div className="booking-form-container">
      
      <form className="booking-form" onSubmit={handleFormSubmit}>
      <h2>Book Now!</h2><br />
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={selectedOccasion}
          onChange={(e) => setSelectedOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input type="submit" value="Make Your Reservation" />
      </form>

      {bookedTimes.length > 0 && (
        <p>Booked times: {bookedTimes.map((bt) => `${bt.date} at ${bt.time}`).join(", ")}</p>
      )}
    </div>
  );
};

export default BookingForm;
