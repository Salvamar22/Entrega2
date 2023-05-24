import React from 'react';
import { useLocation } from 'react-router-dom';
import './viewtickets.css';
import TicketPurchase from './buytickets';   

const TicketsPurchased = () => {
    const location = useLocation();
    const { ticketPQuantity, ticketQQuantity, ticketRQuantity } = location.state;
  
    const ticketPPrice = 10;
    const ticketQPrice = 10;
    const ticketRPrice = 10;
  
    const totalTickets = ticketPQuantity + ticketQQuantity + ticketRQuantity;
    const totalPrice = ticketPQuantity * ticketPPrice + ticketQQuantity * ticketQPrice + ticketRQuantity * ticketRPrice;
  
    return (
      <div className="tickets-purchased">
        <h2>Tickets Purchased</h2>
        <div className="ticket-summary">
          <span>{totalTickets} tickets selected</span>
      
        </div>
        <div className="tickets-selected">
          <h3>Tickets Selected</h3>
          <div>Sección P: {ticketPQuantity}</div>
          <div>Sección Q: {ticketQQuantity}</div>
          <div>Sección R: {ticketRQuantity}</div>
          <div>Total Price: ${totalPrice}</div>
        </div>
      </div>
    );
  };
  
  export default TicketsPurchased;