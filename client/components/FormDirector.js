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
    console.log(this.props.match.params.form_name)
  }


  render() {
    return (
      <div style={this.mobileStyle}>
        <NavBar />
        <SliderForm formName={this.props.match.params.form_name}/>
      </div>
    );
  }

}

export default TravelForm;