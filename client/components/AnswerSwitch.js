import React, {Component} from 'react';
import { Control } from 'react-redux-form';
import AnswerTextList from './AnswerTextList';
import AnswerRadioList from './AnswerRadioList';
// import AnswerDate from './AnswerDate';
import NotFound from './NotFound';

class AnswerSwitch extends Component {
  constructor(props){
    super(props);
    this.radioStyle = { zIndex: 1,
                        height: '20px', width: '20px',
                        opacity: 1, display: 'inline-block'}
    this.display = this.props.current ? 'hidden' : 'block'
  }
  divStyle(color = 'grey', height = '70px'){
    return { padding: '10px',
              background: color,
              height: height,
              maxWidth: '400px',
              marginBottom: '10px'} }
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
      // case "DATE": 
      //   selectedChild = <AnswerDate answer={answer}/>
      //   break;
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