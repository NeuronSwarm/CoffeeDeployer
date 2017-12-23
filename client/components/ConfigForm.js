import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import NavBar from './NavBar';
import Spacer from './Spacer';
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

  divStyle(color = 'grey', height = '70px'){
    return { padding: '10px',
              background: color,
              height: height,
              maxWidth: '400px',
              marginBottom: '10px'} }
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
      <NavBar />
      <Spacer />
      
      <div className="container">
        <LocalForm
          onUpdate={(form) => this.handleUpdate(form)}
          onChange={(values) => this.handleChange(values)}
          onSubmit={(values) => this.handleSubmit(values)}
        >
          <label > What kind of Counter do you want? </label>
          <div style={this.divStyle()}>
            <Control.radio name="type" id="DailyCounter" value="daily" style={this.radioStyle} model=".type"  />
            <label htmlFor="DailyCounter">Daily</label>
            <Control.radio name="type" id="AnnualCounter" value="annual" style={this.radioStyle} model=".type" />
            <label htmlFor="AnnualCounter">Annual</label>
          </div>
          <label > Which side do you want the widget to appear? </label>
          <div style={this.divStyle()}>
            <Control.radio name="align" id="leftAlign" value="left" style={this.radioStyle} model=".alignment"  />
            <label htmlFor="leftAlign">Left</label>
            <Control.radio name="align" id="rightAlign" value="right" style={this.radioStyle} model=".alignment" />
            <label htmlFor="rightAlign">Right</label>
          </div>
          <label > What color will it be? </label>
          <div style={this.divStyle()}>
            <Control.text placeholder="color" style={this.textStyle} model=".color" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-default">Cancel</button>
        </LocalForm>
        <div style={this.divStyle('#444', '150px')}>
          <code>
          { this.renderWidgetCode() }
          </code>
        </div>
      </div>
    </div>

    )
  }
  componentDidMount(){
    this.setState({alignment: "left"});
    console.log(this.state)
  }
}

export default ConfigForm;