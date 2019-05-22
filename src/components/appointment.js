import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  button: {
    backgroundColor: '#b33939',
    color: 'white'
  }
}

class Appointment extends React.Component {

  deleteAppointment = () => {
    console.log('Eliminando cita') ;
    this.props.deleteAppointment(this.props.info.id);
  }

  render(){
    const { petName, ownerName, appointmentDate, appointmentTime, symptom } = this.props.info;
    const { classes } = this.props;
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
        <Button onClick={this.deleteAppointment} variant="contained" className={classes.button}>
          Borrar &times;
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(Appointment);
