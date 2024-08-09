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
            Room Type
            <select name="roomtype">
              <option value=" " disabled selected>Select a Room Type</option>
              <option value="studio">Studio</option>
              <option value="bedsitter">Bed Sitter</option>
              <option value="onebedroom">One Bedroom</option>
              <option value="twobedroom">Two Bedroom</option>
            </select>

          </label>
          <button type="submit">Get Quotation</button>
        </form>
      </div>
      <div className="map-section">
       
      </div>
    </div>
  );
};

export default Booking;
