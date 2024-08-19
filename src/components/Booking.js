import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';
import DisplayMap from './DisplayMap';

const Booking = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    roomType: ''
  });

  const navigate = useNavigate();

  const handleQuotation = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    navigate('/Quotation', { state: formData });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const roomCharges = {
    studio: 4500,
    bedsitter: 5000,
    onebedroom: 6500,
    twobedroom: 8000
  };

  return (
    <div className="booking-container">
      <div className="booking-form">
        <h2>MOVERS</h2>
        <p>Welcome to Marvel Movers. We enhance and simplify your moving process.</p>
        <form onSubmit={handleQuotation}>
          <label>
            From
            <input type="text" name="from" value={formData.from} onChange={handleChange} />
          </label>
          <label>
            To
            <input type="text" name="to" value={formData.to} onChange={handleChange} />
          </label>
          <label>
            Date
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
          </label>
          <label>
            Time
            <input type="time" name="time" value={formData.time} onChange={handleChange} />
          </label>
          <label>
            Room Type
            <select name="roomType" value={formData.roomType} onChange={handleChange} required>
              <option value="" disabled>Select a Room Type</option>
              <option value="studio">Studio</option>
              <option value="bedsitter">Bed Sitter</option>
              <option value="onebedroom">One Bedroom</option>
              <option value="twobedroom">Two Bedroom</option>
            </select>
          </label>
          {formData.roomType && (
            <p>Room Charge: {roomCharges[formData.roomType]} KSh</p>
          )}
          <button type="submit">Get Quotation</button>
        </form>
      </div>
      <div className="map-section">
        <DisplayMap />
      </div>
    </div>
  );
};

export default Booking;
