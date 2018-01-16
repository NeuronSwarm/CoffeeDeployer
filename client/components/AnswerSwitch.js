import React, {Component} from 'react';
import { Control } from 'react-redux-form';
import AnswerTextList from './AnswerTextList';
import AnswerRadioList from './AnswerRadioList';
import AnswerDate from './AnswerDate';
import NotFound from './NotFound';

class AnswerSwitch extends Component {
  constructor(props){
    super(props);
  }
  setChild(){
    var answer = this.props.answer
    var selectedChild; 
    switch (answer.type){
      case "TEXTLIST": 
        selectedChild = <AnswerTextList answer={answer}
                                        default={ {} }/>
        break;
      case "RADIOLIST": 
        selectedChild = <AnswerRadioList answer={answer}/>
        break;
      case "DATE": 
        selectedChild = <AnswerDate answer={answer}/>
        break;
      default:
        selectedChild = <NotFound />
      
    }
    return selectedChild;
  }

  render() {
    return (
      this.setChild()
    )
  }
  componentDidMount(){
  }
}

export default AnswerSwitch;