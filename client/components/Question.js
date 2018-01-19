import React, {Component} from 'react';
import { Control } from 'react-redux-form';
import Answer from './Answer';
//import SimpleButton from './SimpleButton';

class Question extends Component {
  constructor(props){
    super(props);
    this.questionStyle = { fontSize: '24px' }
    this.display = this.props.current ? 'hidden' : 'block'
  }
  divStyle(color = 'grey', height = '70px'){
    return { padding: '10px',
              minHeight: height,
              maxWidth: '400px',
              marginBottom: '10px'} }
  isCurrent(){
    return this.props.current == this.props.id ? 'block' : 'none'
  }

  render() {
    return (
    <div style={{display: this.isCurrent() }}>
      <div style={this.questionStyle}> { this.props.details.name } </div>
        <div style={this.divStyle('grey', '140px')}>
          <Answer details= { this.props.details.answer } />
        </div>
    </div>

    )
  }
  componentDidMount(){
  }
}

export default Question;