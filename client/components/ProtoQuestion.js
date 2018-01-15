import React, {Component} from 'react';
import { Control } from 'react-redux-form';
//import SimpleButton from './SimpleButton';

class Question extends Component {
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
    return (
    <div >
      <label > What did you eat for dinner </label>
        <div style={this.divStyle()}>
          <Control.radio name="type" id="DailyCounter" value="daily" style={this.radioStyle} model=".type"  />
          <label htmlFor="DailyCounter">Daily</label>
          <div style={{display: 'inline-block', width: '3%'}}></div>
          <Control.radio name="type" id="AnnualCounter" value="annual" style={this.radioStyle} model=".type" />
          <label htmlFor="AnnualCounter">Annual</label>
        </div>
    </div>

    )
  }
  componentDidMount(){
  }
}

export default Question;