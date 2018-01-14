import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import NavBar from './NavBar';
import Spacer from './Spacer';
import QuestionList from './QuestionList';
import { LocalForm, Control } from 'react-redux-form';
import EmbeddableWidget from '../lib/embeddable-widget'
import Config from '../questions-config'
import initState from '../init-state'

class SliderForm extends Component {
  constructor(props){
    super(props);
    this.form = { style: { maxWidth: '300px'} }
    initState({current: 1}, this);
    console.log(this.state)
  }

  handleBack(){ this.setState({current: this.state.current - 1 })}
  handleNext(){ this.setState({current: this.state.current + 1 })}
  handleChange(values) { console.log(values)}
  handleUpdate(form) { }
  handleSubmit(values) { 
    console.log(values);
    this.setState(values) }

  render() {
    return (
    <div>
      <NavBar />
      <Spacer />
      
      <div className="container">
        <LocalForm
          onUpdate={(form) =>  this.handleUpdate(form)}
          onChange={(values) => this.handleChange(values)}
          onSubmit={(values) => this.handleSubmit(values)}
        >

          <QuestionList current = {this.state.current} questions={Config.questions}/>

          <button type="button" onClick={this.handleBack.bind(this)}
                  className="btn btn-default">Back</button>
          <div style={{display: 'inline-block', width: '2%'}}></div>
          <button type="button" onClick={this.handleNext.bind(this)}
                  className="btn btn-primary">Next</button>
          <button style={ {display: 'none' } } type="submit" className="btn btn-primary">Submit</button>
        </LocalForm>
      </div>
    </div>

    )
  }
  componentDidMount(){
    console.log(this.state)
  }
}

export default SliderForm;