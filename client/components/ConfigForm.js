import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { LocalForm, Control } from 'react-redux-form';
//import SimpleButton from './SimpleButton';

class ConfigForm extends Component {
  constructor(props){
    super(props);
    this.form = { style: { maxWidth: '300px'} }
    this.divStyle = { background: 'grey', height: '200px', width: '200px'}
    this.radioStyle = { zIndex: 1,
                        height: '20px', width: '20px',
                        opacity: 1, display: 'inline-block'}
    this.textStyle = { color: 'black' }
  }

  handleChange(values) {  }
  handleUpdate(form) {  }
  handleSubmit(values) { console.log(values) }

  render() {
    return (
      <LocalForm
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
        onSubmit={(values) => this.handleSubmit(values)}
      >
        <div style={this.divStyle}>
          <Control.radio defaultValue={true}  name="align" id="leftAlign" value="left" style={this.radioStyle} model="alignment"  />
          <label htmlFor="leftAlign">Left</label>
          <Control.radio name="align" id="rightAlign" value="right" style={this.radioStyle} model="alignment" />
          <label htmlFor="rightAlign">Right</label>
        </div>
        <div style={this.divStyle}>
          <Control.text style={this.textStyle} model=".color" />
        </div>
      </LocalForm>
    )
  }
  componentDidMount(){
    console.log("ConfigForm Mounted")
    this.setState({alignment: "left"});
  }
}

export default ConfigForm;