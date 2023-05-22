import React, { useState } from 'react';
import "./events.css";

const EventoComponent = () => {
  const [nombreEvento, setNombreEvento] = useState('');
  const [lugar, setLugar] = useState('');
  const [direccion, setDireccion] = useState('');
  const [fecha, setFecha] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');

  const handleNext = () => {
    // Lógica para procesar el siguiente paso
    console.log('Siguiente paso...');
  };

  return (
    <div className="evento-container">
      <h2>Crear Evento</h2>
      <div className="form-group">
        <label>Nombre del evento:</label>
        <input
          type="text"
          value={nombreEvento}
          onChange={(e) => setNombreEvento(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Lugar:</label>
        <input
          type="text"
          value={lugar}
          onChange={(e) => setLugar(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Dirección:</label>
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Fecha:</label>
        <input
          type="text"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Hora de inicio:</label>
        <input
          type="text"
          value={horaInicio}
          onChange={(e) => setHoraInicio(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Hora de finalización:</label>
        <input
          type="text"
          value={horaFin}
          onChange={(e) => setHoraFin(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Categoría:</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Imagen del evento:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
        />
      </div>
      <button className="next-button" onClick={handleNext}>
        Siguiente
      </button>
    </div>
  );
};

export default EventoComponent;