import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { LocalForm, Control } from 'react-redux-form';
import EmbeddableWidget from '../lib/embeddable-widget'
//import SimpleButton from './SimpleButton';

class ConfigForm extends Component {
  constructor(props){
    super(props);
    this.form = { style: { maxWidth: '300px'} }
    this.radioStyle = { zIndex: 1,
                        height: '20px', width: '20px',
                        opacity: 1, display: 'inline-block'}
    this.textStyle = { color: 'black' }
  }

  divStyle(color = 'grey'){ return { padding: '10px', background: color, height: '100px', width: '200px'} }
  handleChange(values) { }
  handleUpdate(form) { }
  handleSubmit(values) { 
    this.eWidget = new EmbeddableWidget(values)
    this.setState(values) }

  renderWidgetCode(){
    if(this.eWidget) return this.eWidget.getCode(); else return "Waiting for config submission..";
  }
  render() {
    return (
    <div>
      <LocalForm
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
        onSubmit={(values) => this.handleSubmit(values)}
      >
        <div style={this.divStyle()}>
          <Control.radio name="align" id="leftAlign" value="left" style={this.radioStyle} model=".alignment"  />
          <label htmlFor="leftAlign">Left</label>
          <Control.radio name="align" id="rightAlign" value="right" style={this.radioStyle} model=".alignment" />
          <label htmlFor="rightAlign">Right</label>
        </div>
        <div style={this.divStyle()}>
          <Control.text placeholder="color" style={this.textStyle} model=".color" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-default">Cancel</button>
      </LocalForm>
      <div style={this.divStyle('#444')}>
        <code>
        { this.renderWidgetCode() }
        </code>
      </div>
    </div>

    )
  }
  componentDidMount(){
    console.log("ConfigForm Mounted")
    this.setState({alignment: "left"});
    console.log(this.state)
  }
}

export default ConfigForm;