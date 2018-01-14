import React, {Component} from 'react';
import { Control } from 'react-redux-form';
//import SimpleButton from './SimpleButton';

class Answer extends Component {
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
  isCurrent(){
    return this.props.current == this.props.id ? 'block' : 'none'
  }

  render() {
    var answer = this.props.details
    return (
      <div>
        <Control.radio name={answer.dataName} id={answer.dataID.idOne} value={answer.dataValue.optionOne} style={this.radioStyle} model={answer.dataModel}  />
        <label htmlFor={answer.dataID.idOne}> { answer.dataID.idOne }</label>
        <div style={{display: 'inline-block', width: '3%'}}></div>
        <Control.radio name={answer.dataName} id={answer.dataID.idTwo} value={answer.dataValue.optionTwo} style={this.radioStyle} model={answer.dataModel}  />
        <label htmlFor={answer.dataID.idTwo}>{ answer.dataID.idTwo }</label>
      </div>

    )
  }
  componentDidMount(){
  }
}

export default Answer;