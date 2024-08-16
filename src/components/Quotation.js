import React from 'react';
import { useLocation } from 'react-router-dom';
import './Quotation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';

const Quotation = () => {
  const { state } = useLocation();
  const { from, to, date, time, roomType } = state || {};

  const roomCharges = {
    studio: 4500,
    bedsitter: 5000,
    onebedroom: 6500,
    twobedroom: 8000
  };

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Date not provided';

  const displayRoomType = roomType ? roomType.charAt(0).toUpperCase() + roomType.slice(1) : 'N/A';
  const roomCharge = roomCharges[roomType] || 0;

  return (
    <div className="quotation-container">
      <header className="quotation-header">
        <div className="header-left">
          <FontAwesomeIcon icon={faPeopleCarry} className="company-icon" />
          <h1 className="company-name">Marvel Movers</h1>
        </div>
        <div className="header-right">
          <p className="quotation-date">{formattedDate}</p>
          <p className="client-name">Client: John Doe</p>
        </div>
      </header>
      
      <div className="addresses">
        <div className="from">
          <p><strong>From:</strong> {from || 'Location not provided'}</p>
          <p className="quotation-date">
            <strong>Date to be Moved:</strong><br />
            {formattedDate}<br />
            <strong>Time:</strong> {time || 'Time not provided'}
          </p>
          <p><strong>Property Type:</strong> <span className="highlight">{displayRoomType}</span></p>
          <p><strong>Distance:</strong> 15km</p>
        </div>
        <div className="to">
          <p><strong>To:</strong> {to || 'Destination not provided'}</p>
        </div>
      </div>

      <table className="quotation-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Packing and unpacking</td>
            <td>4000</td>
            <td>4000</td>
          </tr>
          <tr>
            <td>Assembly and Disassembly of Furniture</td>
            <td>3000</td>
            <td>3000</td>
          </tr>
          <tr className="transport-row">
            <td>
              Transportation:<br />
              Distance: 15 km<br />
              Calculation: 15 km / 5 km<br />
              per unit - 3 units<br />
              Cost: 3 units * 700 KSh/unit
            </td>
            <td>2100</td>
            <td>2100</td>
          </tr>
          <tr>
            <td>Basic Insurance coverage</td>
            <td>3000</td>
            <td>3000</td>
          </tr>
          <tr>
            <td>{displayRoomType} Charge</td>
            <td>{roomCharge}</td>
            <td>{roomCharge}</td>
          </tr>
        </tbody>
      </table>

      <div className="total-package">
        <p><strong>Total Package cost:</strong> {roomCharge + 12100} KSh</p>
      </div>

      <div className="note-section">
        <p><strong>Note:</strong> 50% deposit required upon booking. Pay the balance due on the day of the move.</p>
        <p className="thank-you">Thank you for Trusting Us, experience the best move</p>
      </div>
    </div>
  );
}

export default Quotation;
