import React, { Component } from 'react';
import Header from './components/header';
import AddAppointment from './components/add-appointment';
import ListAppointment from './components/list-appointment';


class App extends Component {
  state = {
    appointments: []
  }

  componentDidMount(){
    // funcion que va a leer los datos almacenados en el storage y los va a agregar al state
    const appointmentsLS = localStorage.getItem('appointments')  //se accede por la llave

    if(appointmentsLS){
      // SI hay un registro en localstorage
      this.setState({
        appointments: JSON.parse(appointmentsLS) //JSON.parse( hace lo contrario a JSON.stringify
      })  //toma el string y lo convierte a un array o objeto
    }
  }

  componentDidUpdate(){
    // Una vez que se agregue un cambio en el formulario, este se agregue al state
    localStorage.setItem( //va a agregar algo al storage, getItem obtiene algo del storage
      'appointments',
      JSON.stringify(this.state.appointments)
    ) //localstorage solo puede almacenar cadenas de texto, por lo que JSON.stringify convierte un array en un string
    // y asi se podra almacenar en el storage. localstorage se almacena segun la url, el dominio
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
