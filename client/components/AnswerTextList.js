import React, {Component} from 'react';
import { Control } from 'react-redux-form';

class AnswerTextList extends Component {
  constructor(props){
    super(props);
    // Need padding too
    this.inputStyle = { color: 'black',
                        height: '40px',
                        width: '100%' }
    this.containerStyle = { paddingBottom: '15px' }
  }

  render() {
    var list = this.props.answer.list
    return (
      <div>
      { list.map( (input) =>  
          <div key={input.id} style={this.containerStyle}>
          <Control.text 
                        placeholder={input.placeholder}  
                        model={input.model}  
                        style={this.inputStyle} /></div> ) }
          
      </div>

    )
  }
  componentDidMount(){
  }
}

export default AnswerTextList;