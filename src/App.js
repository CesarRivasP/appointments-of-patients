import React from 'react';
import Header from './components/header';
import AddAppointment from './components/add-appointment';


function App() {
  return (
    <div className="container">
      <Header title="Administrador de Pacientes de Veterinario"/>
      <div className="row">
        <div className="col-md-6">
          <AddAppointment />
        </div>
      </div>
    </div>
  );
}

export default App;
