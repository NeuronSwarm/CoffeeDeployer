import React, {Component} from 'react';
import InstallDirections from './InstallDirections';
import ConfigForm from './ConfigForm';


class WidgetGenerator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ConfigForm />
        <InstallDirections />
      </div>
    );
  }

}

export default WidgetGenerator;