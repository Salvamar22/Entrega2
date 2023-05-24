import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import './buytickets.css';

const TicketPurchase = () => {
  const [ticketPQuantity, setTicketPQuantity] = useState(0);
  const [ticketQQuantity, setTicketQQuantity] = useState(0);
  const [ticketRQuantity, setTicketRQuantity] = useState(0);

  const ticketPPrice = 10;
  const ticketQPrice = 10;
  const ticketRPrice = 10;

  const handleTicketPIncrement = () => {
    setTicketPQuantity(ticketPQuantity + 1);
  };

  const handleTicketPDecrement = () => {
    if (ticketPQuantity > 0) {
      setTicketPQuantity(ticketPQuantity - 1);
    }
  };

  const handleTicketQIncrement = () => {
    setTicketQQuantity(ticketQQuantity + 1);
  };

  const handleTicketQDecrement = () => {
    if (ticketQQuantity > 0) {
      setTicketQQuantity(ticketQQuantity - 1);
    }
  };

  const handleTicketRIncrement = () => {
    setTicketRQuantity(ticketRQuantity + 1);
  };

  const handleTicketRDecrement = () => {
    if (ticketRQuantity > 0) {
      setTicketRQuantity(ticketRQuantity - 1);
    }
  };

  const totalTickets = ticketPQuantity + ticketQQuantity + ticketRQuantity;
  const totalPrice = ticketPQuantity * ticketPPrice + ticketQQuantity * ticketQPrice + ticketRQuantity * ticketRPrice;

  const navigate = useNavigate();

  const handleBuy = () => {
    const purchasedTickets = {
      ticketPQuantity,
      ticketQQuantity,
      ticketRQuantity,
    };

    navigate('/tickets-purchased', { state: purchasedTickets });
  };

  return (
    <div className="ticket-purchase">
      <h2>Buy Tickets</h2>
   
      <div className="ticket-categories">
        <h3>Tickets</h3>
        <div className="ticket-category">
          <span className="ticket-category-name">Sección P:</span>
          <span className="ticket-category-availability">12 sitios disponibles</span>
          <span className="ticket-category-price">${ticketPPrice} por persona</span>
          <button className="ticket-quantity-button" onClick={handleTicketPDecrement}>-</button>
          <span className="ticket-quantity">{ticketPQuantity}</span>
          <button className="ticket-quantity-button" onClick={handleTicketPIncrement}>+</button>
        </div>
        <div className="ticket-category">
          <span className="ticket-category-name">Sección Q:</span>
          <span className="ticket-category-availability">12 sitios disponibles</span>
          <span className="ticket-category-price">${ticketQPrice} por persona</span>
          <button className="ticket-quantity-button" onClick={handleTicketQDecrement}>-</button>
          <span className="ticket-quantity">{ticketQQuantity}</span>
          <button className="ticket-quantity-button" onClick={handleTicketQIncrement}>+</button>
        </div>
        <div className="ticket-category">
          <span className="ticket-category-name">Sección R:</span>
          <span className="ticket-category-availability">12 sitios disponibles</span>
          <span className="ticket-category-price">${ticketRPrice} por persona</span>
          <button className="ticket-quantity-button" onClick={handleTicketRDecrement}>-</button>
          <span className="ticket-quantity">{ticketRQuantity}</span>
          <button className="ticket-quantity-button" onClick={handleTicketRIncrement}>+</button>
        </div>
      </div>
      <div className="tickets-selected">
        <h3>Tickets Selected</h3>
        <div>
          <span>Sección P: {ticketPQuantity}</span>
        </div>
        <div>
          <span>Sección Q: {ticketQQuantity}</span>
        </div>
        <div>
          <span>Sección R: {ticketRQuantity}</span>
        </div>
      </div>
      <div className="ticket-summary">
       <br/>
        <span> {totalTickets} tickets selected</span>
        <br/>
        <span> Total Price: ${totalPrice} </span>
      </div>
      <button className="buy-button" onClick={handleBuy}>
        Buy
      </button>
    </div>
  );
};

export default TicketPurchase;




