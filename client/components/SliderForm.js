import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
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
    this.counter = 0;
    initState({current: 1}, this);
  }
  isFirstPage(){
    var isHidden = {display: 'none'}
    var isDisplayed = {display: 'inline-block'}
    return this.state.current == 1 ? isHidden : isDisplayed
  }
  // event Handlers
  handleBack(){ this.setState({current: this.state.current - 1 }); this.counter = 0; }
  handleNext(){ this.setState({current: this.state.current + 1 })}
  handleChange(values) { console.log(values)}
  handleUpdate(form) { console.log('update') }
  handleSubmit(values) { 
    console.log('submit')
    if(this.counter == 0) { this.counter++; return}
    localStorage.setItem('sampleForm', JSON.stringify(values, null, 2))
    window.location.replace('/results')

     }

  render() {
    return (
    <div style={this.props.style}>
      <Spacer />
      
      <div className="mobile-container1">
        <LocalForm
          onUpdate={(form) =>  this.handleUpdate(form)}
          onChange={(values) => this.handleChange(values)}
          onSubmit={(values) => this.handleSubmit(values)}
        >

          <QuestionList current = {this.state.current} questions={Config.questions}/>

          <div className="left mobile-form-btn">
            <button type="button" onClick={this.handleBack.bind(this)}
                    className="full btn btn-default"
                    style={this.isFirstPage()}>Back</button>
          </div >

          <div className="right mobile-form-btn">
            { this.state.current != Config.questions.length ? 
              <button type="button" onClick={this.handleNext.bind(this)}
                    className="full btn btn-primary">Next</button>
            :
              <button type="submit" className="full btn btn-success">Submit</button>
            }
          </div >
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