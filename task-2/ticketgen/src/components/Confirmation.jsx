// src/components/Confirmation.js
import React from "react";
import "./../styles/Confirmation.css";

const Confirmation = ({ selectedTicket, numberTickets,  email, specialRequest,   photo, name, setStep}) => {
  const clearStorage = () => {
  
    localStorage.clear();
    window.location.reload()
    setStep(1); 
  };
  return (
    <div className="container fade-in">
      <h2>Your Ticket is Booked!</h2>
      <p>Check your email for a copy or you can <strong>download</strong>.</p>
      <div className="ticket-preview">
        <img src={photo}  alt="Ticket QR" />
        <p id="name">{name}</p>
        <p id="email">{email}</p>
        <p id="selectedTicket">{selectedTicket}</p>
        <p id="numberTickets">{numberTickets}</p>
        <p id="specialRequest">{specialRequest}</p>
      </div>
      <div className="footer">
        <button className="back-btn" onClick={clearStorage}>Book Another Ticket</button>
        <button className="download-btn">Download Ticket</button>
      </div>
    </div>
  );
};

export default Confirmation;
