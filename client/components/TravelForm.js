import React, {Component} from 'react';
import InstallDirections from './InstallDirections';
import NavBar from './NavBar';
import SliderForm from './SliderForm';
import StartQuote from './StartQuote';
import initState from '../init-state';


class TravelForm extends Component {
  constructor(props) {
    super(props)
    this.mobileStyle = {maxWidth: '600px'}
    var hiddenStyle = this.hiddenStyle = { display: 'none' }
    var blockStyle = this.blockStyle = { display: 'block' }
    initState( {title: blockStyle, form: hiddenStyle}, this)
  }

  handleNext(){ 
    this.setState({ form: this.blockStyle, title: this.hiddenStyle})
  }

  render() {
    return (
      <div style={this.mobileStyle}>
        <NavBar />
        <div style={this.state.title} >
          <StartQuote />
          <div style={this.mobileStyle } className="bottom padding">
            <button type="button" className="btn btn-success mobile-btn"  onClick={this.handleNext.bind(this)} >
              GET STARTED
            </button>
          </div>
        </div>
        <SliderForm style={this.state.form}/>
      </div>
    );
  }

}

export default TravelForm;