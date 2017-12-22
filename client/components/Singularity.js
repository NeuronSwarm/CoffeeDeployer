import React, {Component} from 'react';
import { connect } from 'react-redux';
import SimpleButton from './SimpleButton';
import { postNewCoffeeCup} from '../redux/reducers/coffee-api';

class Singularity extends Component {
  constructor(props){
    super(props);
    this.singularityDate = new Date(2045, 0, 1)
  }

  currentCount(){
    var seconds = (this.singularityDate - new Date) / 1000
    var minutes = seconds / 60 
    var hours = minutes / 60
    var days = hours / 24
    var hoursLeft = hours - (Math.floor(days) * 24)
    var minLeft = minutes - (Math.floor(hours) * 60)
    var secLeft = seconds - (Math.floor(minutes) * 60)
    var dt = this.state.seconds - secLeft 
    // days : hours : minutes : seconds
    this.setState({ change: dt, seconds: secLeft, value : `${Math.floor(days)}d : ${Math.floor(hoursLeft)}h : ${Math.floor(minLeft)}m : ${Math.floor(secLeft)}s` })
    this.startTimer();
  }
  startTimer(){
    setTimeout(() => {this.currentCount()}, 1000)
  }
  CountDownClock(){
    return this.currentCount()
  }
  componentWillMount(){
    this.setState({seconds: 0, value : 'new' })
  }
  componentDidMount(){
    this.CountDownClock();
  }
  SetPageHeight(){
    return {height: window.innerHeight}
  }
  MakeInline(){
    return {display: 'inline-block', width: '100%'}
  }
  render() {
    return (
      <div >
        <div style={this.MakeInline()}>
          <div className={'mobile-container'} style={ this.SetPageHeight() }>
            <div>
              <h2> CoffeeLux is Coming Soon! </h2>
              <p> In the meantime.. </p>
              <div>
                <h2> Days to the Singularity</h2>
                  { this.state.value }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Singularity;