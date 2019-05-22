import React from 'react';

const Appointment = (props) => {
  return (
    <div className="media mt-3">
      <div className="media-body">
        <h3 className="mt-0">Nombre de mascota</h3>
        <p className="card-text"><span>Nombre del Dueño: </span></p>
        <p className="card-text"><span>Fecha: </span></p>
        <p className="card-text"><span>Hora: </span></p>
        <p className="card-text"><span>Sintomas: </span></p>
        <p className="card-text"> </p>
      </div>
    </div>
  )
}

export default Appointment;
