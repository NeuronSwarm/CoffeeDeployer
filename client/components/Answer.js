import React, {Component} from 'react';
import { Control } from 'react-redux-form';
import AnswerSwitch from './AnswerSwitch';

class Answer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    var details = this.props.details
    return (
      <AnswerSwitch answer={details} />

    )
  }
  componentDidMount(){
  }
}

export default Answer;