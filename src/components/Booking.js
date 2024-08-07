import React from 'react';
import './Booking.css';

const Booking = () => {
  return (
    <div className="booking-container">
      <div className="booking-form">
        <h2>MOVERS</h2>
        <p>Welcome to marvel movers. We enhance and simplify your moving process.</p>
        <form>
          <label>
            From
            <input type="text" name="from" />
          </label>
          <label>
            To
            <input type="text" name="to" />
          </label>
          <label>
            Date
            <input type="date" name="date" />
          </label>
          <label>
            Time
            <input type="time" name="time" />
          </label>
          <label>
            Room type
            <input type="text" name="roomtype" />
          </label>
          <button type="submit">Get Quotation</button>
        </form>
      </div>
      <div className="map-section">
        <img src="your-image-url-here" alt="Map" />
        <div className="locations">
          <p>Current location</p>
          <p>Where to</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
