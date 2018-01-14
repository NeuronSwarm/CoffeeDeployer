import React, {Component} from 'react';
import InstallDirections from './InstallDirections';
import SliderForm from './SliderForm';


class TravelForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <SliderForm />
      </div>
    );
  }

}

export default TravelForm;