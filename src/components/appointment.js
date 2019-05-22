import React from 'react';

const Appointment = (props) => {
  const { petName, ownerName, appointmentDate, appointmentTime, symptom } = props.info;
  return (
    <div className="media mt-3">
      <div className="media-body">
        <h3 className="mt-0"><span>{ petName }</span></h3>
        <p className="card-text"><span>Nombre del Dueño: </span>{ ownerName }</p>
        <p className="card-text"><span>Fecha: </span>{ appointmentDate }</p>
        <p className="card-text"><span>Hora: </span>{ appointmentTime }</p>
        <p className="card-text"><span>Sintomas: </span>{ symptom }</p>
        <p className="card-text"> </p>
      </div>
    </div>
  )
}

export default Appointment;
