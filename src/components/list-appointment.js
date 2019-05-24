import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Appointment from './appointment';


const styles = {
  divider: {
    marginBottom: 35,
  }
};


class ListAppointment extends Component {
  render(){
    const { classes } = this.props;
    const appointments = this.props.appointments;
    const message = Object.keys(appointments).length === 0 ? 'No hay citas' : 'Administra tus citas aqui';
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-2 title-card">{ message }</h2>

          <Divider className={classes.divider}/>
          <div className="lista-citas">
            {
              Object.keys(this.props.appointments).map((appointment) => (
                <Appointment
                  key={appointment}
                  info={this.props.appointments[appointment]} //va a repasar la cita de acuerdo al indice en el que se encuentra
                  deleteAppointment={this.props.deleteAppointment}
                />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

ListAppointment.propTypes = {
  appointments: PropTypes.array.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
}

export default withStyles(styles)(ListAppointment)
