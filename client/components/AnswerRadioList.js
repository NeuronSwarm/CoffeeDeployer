import React, {Component} from 'react';
import { Control } from 'react-redux-form';

class AnswerTextList extends Component {
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
    var answer = this.props.answer
    return (
      <div>
        <Control.radio name={answer.dataName} id={answer.dataID.idOne} value={answer.dataValue.optionOne} style={this.radioStyle} model={answer.dataModel}  />
        <label htmlFor={answer.dataID.idOne}> { answer.dataValue.optionOne }</label>
        <div style={{display: 'inline-block', width: '3%'}}></div>
        <Control.radio name={answer.dataName} id={answer.dataID.idTwo} value={answer.dataValue.optionTwo} style={this.radioStyle} model={answer.dataModel}  />
        <label htmlFor={answer.dataID.idTwo}>{ answer.dataValue.optionTwo }</label>
      </div>
    )
  }
  componentDidMount(){
  }
}

export default AnswerTextList;