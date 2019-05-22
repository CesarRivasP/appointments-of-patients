import React, { Component } from 'react';
import Header from './components/header';
import AddAppointment from './components/add-appointment';
import ListAppointment from './components/list-appointment';


class App extends Component {
  state = {
    appointments: []
  }

  createAppointment = (newAppointment) => {
    console.log(newAppointment);
    //asi almacena en el estado una copia del estado anterior, y agregar el nuevo estado
    const appointments = [ ...this.state.appointments, newAppointment ];
    console.log(appointments);
    // Agregar el state actual
    this.setState({
      appointments
    })
  }

  deleteAppointment = (id) => {
    // console.log(id);
    // obtener copia del state
    const currentAppointment = [...this.state.appointments];

    // borrar el elemento del state
    //que no sea igual al id que se le esta pasando
    const appointments = currentAppointment.filter((appointment) => appointment.id !== id);

    // actualizar el state
    this.setState({
      appointments
    })
  }

  render(){
    return (
      <div className="container">
        <Header title="Administrador de Pacientes de Veterinario"/>
        <div className="row">
          <div className="col-md-6 pl-0 pr-0">
            <AddAppointment  createAppointment={this.createAppointment} />
          </div>
          <div className="col-md-6 pl-0 pr-0">
            <ListAppointment  appointments={this.state.appointments} deleteAppointment={this.deleteAppointment} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
