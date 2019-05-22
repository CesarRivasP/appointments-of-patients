import React, { Component } from 'react';
import Header from './components/header';
import AddAppointment from './components/add-appointment';


class App extends Component {

  createAppointment = (appointment) => {
    console.log(appointment);
  }

  render(){
    return (
      <div className="container">
        <Header title="Administrador de Pacientes de Veterinario"/>
        <div className="row">
          <div className="col-md-6 pl-0 pr-0">
            <AddAppointment  createAppointment={this.createAppointment} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
