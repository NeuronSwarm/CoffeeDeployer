import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SimpleForm from './SimpleForm';
import { Control } from 'react-redux-form';
//import SimpleButton from './SimpleButton';
import { register} from '../../redux/reducers/coffee-api';

class Register extends Component {
  constructor(props){
    super(props);
    this.form = { style: { maxWidth: '300px'} }
  }

  render() {
    return (
      <div className="mobile-container">
        <h1>Register Page</h1>
        <p className="lead"> For Coffee Fanatics</p>
        <br/>
        <SimpleForm formDispatcher={register} onSuccess="/widget">

          <div className="padding input-text"> 
            <Control.text model=".email" placeholder="Email"/>
          </div> 
          <button type="submit" className="btn btn-default">Submit</button>
          <button type="button" className="btn btn-primary">Cancel</button>
        </ SimpleForm >
      </div>
    )
  }
}

export default Register;