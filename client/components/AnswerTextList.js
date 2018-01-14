import React, {Component} from 'react';
import { Control } from 'react-redux-form';

class AnswerTextList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    var list = this.props.answer.list
    return (
      <div>
      { list.map( (input) =>  
          <Control.text key={input.id}
                        placeholder={input.placeholder}  
                        model={input.model}  
                        {...this.props.default} /> ) }
      </div>

    )
  }
  componentDidMount(){
  }
}

export default AnswerTextList;