import React, { Component } from 'react';
import Appointment from './appointment';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


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
            <Appointment />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ListAppointment)
