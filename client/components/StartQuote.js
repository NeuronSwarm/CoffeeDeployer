import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SpacerThird from './SpacerThird';
import QuestionList from './QuestionList';
import { LocalForm, Control } from 'react-redux-form';
import EmbeddableWidget from '../lib/embeddable-widget'
import Config from '../questions-config'
import initState from '../init-state'

class StartQuote extends Component {
  constructor(props){
    super(props);
    this.container = { style: { maxWidth: '300px'} }
  }


  render() {
    var fullScreen = {width: Math.min(innerWidth, 600), height: innerHeight}
    return (
    <div style={this.props.style}>
      
      <div style={ fullScreen }className="paradise">
        <SpacerThird />
        <div className="intro-container padding">
          <h1 className="title">
            
            DREAM VACATIONS
          </h1>
          <h3 id="suffix"> BOOK TODAY </h3>
        </div>
      </div>
    </div>

    )
  }
  componentDidMount(){
    console.log(this.state)
  }
}

export default StartQuote;