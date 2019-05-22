import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


const styles = {
  button: {
    backgroundColor: '#009432',
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

    }

    this.petsNameRef = React.createRef();
    this.ownerNameRef = React.createRef();
    this.appointmentDateRef = React.createRef();
    this.appointmentTimeRef = React.createRef();
    this.symptomRef = React.createRef();
  }

  handleCreateNewAppointment = (e) => {
    e.preventDefault();

    console.log(this.petsNameRef.current.value);
    console.log(this.ownerNameRef.current.value);
    console.log(this.appointmentDateRef.current.value);
    console.log(this.appointmentTimeRef.current.value);
    console.log(this.symptomRef.current.value);

    this.props.createAppointment('desde app.js');
  }

  render(){
    const { classes } = this.props;
    return (
      <div className="card mt-5"> {/* mt es margin top de 5*/}
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
                <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                  <input ref={this.appointmentDateRef} type="date" className="form-control" />
                </div>

                <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                <div className="col-sm-8 col-lg-4">
                  <input ref={this.appointmentTimeRef} type="time" className="form-control" />
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
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AddAppointment);
