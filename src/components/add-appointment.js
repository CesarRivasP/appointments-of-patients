import React, { Component } from 'react';
import uuid from 'uuid';  //esto es para generar un id unico
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


const styles = {
  button: {
    backgroundColor: '#3867d6',
    color: 'white'
  },
  divider: {
    marginBottom: 35,
  },
};


class AddAppointment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false
    }

    this.petsNameRef = React.createRef();
    this.ownerNameRef = React.createRef();
    this.appointmentDateRef = React.createRef();
    this.appointmentTimeRef = React.createRef();
    this.symptomRef = React.createRef();
  }

  handleCreateNewAppointment = (e) => {
    e.preventDefault();

      const petName = this.petsNameRef.current.value,
            ownerName = this.ownerNameRef.current.value,
            appointmentDate = this.appointmentDateRef.current.value,
            appointmentTime = this.appointmentTimeRef.current.value,
            symptom = this.symptomRef.current.value;

    if(petName === '' || ownerName === '' || appointmentDate === '' || appointmentTime === '' || symptom === ''){
      console.log('Faltan campos por rellenar');
      this.setState({ error: true });
    }
    else {
      const newAppointment = {
        id: uuid(),
        petName,
        ownerName,
        appointmentDate,
        appointmentTime,
        symptom
      }

      this.props.createAppointment(newAppointment);
      // reiniciar el formulario
      e.currentTarget.reset()

      this.setState({ error: false })
    }
  }

  render(){
    const { classes } = this.props;
    const { error } = this.state;
    return (
      <div className="card mt-5 card-style"> {/* mt es margin top de 5*/}
        <div className="card-body">
          <h2 className="card-title text-center mb-2 title-card">
            Agregar las citas aquí
          </h2>

           <Divider className={classes.divider}/>

          <form onSubmit={this.handleCreateNewAppointment}>
            <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">Nombre de Mascota</label>
                <div className="col-sm-8 col-lg-8">
                  <input ref={this.petsNameRef} type="text" className="form-control" placeholder="Nombre de la Mascota" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-lg-4 col-form-label">Nombre del Dueño</label>
                <div className="col-sm-8 col-lg-8">
                  <input ref={this.ownerNameRef} type="text" className="form-control"  placeholder="Nombre del Dueño de la Mascota" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                <div className="col-sm-8 col-lg-5  mb-4 mb-lg-0">
                  <input ref={this.appointmentDateRef} type="date" className="form-control" />
                </div>

                <label className="col-sm-4 col-lg-2 col-form-label pr-1 pl-1 text-center">Hora</label>
                <div className="col-sm-8 col-lg-3">
                  <input ref={this.appointmentTimeRef} type="time" className="form-control pl-1 pr-1" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-4 col-lg-3 col-form-label">Sintomas</label>
                <div className="col-sm-8 col-lg-9">
                  <textarea  ref={this.symptomRef} className="form-control"></textarea>
                </div>
              </div>
              <div className="form-group row justify-content-end">
              <div className="col-sm-3">
                <Button type="submit" variant="contained" className={classes.button}>
                  Agregar
                </Button>
              </div>
            </div>
          </form>
          {
            error ?
              <div className="alert alert-danger text-center">Todos los campos son obligatorios</div>
              :
              ''
          }
        </div>
      </div>
    );
  }
}

AddAppointment.propTypes = {
  createAppointment: PropTypes.func.isRequired
}

export default withStyles(styles)(AddAppointment);
