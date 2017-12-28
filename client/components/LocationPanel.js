import React, {Component} from 'react';
import {connect} from 'react-redux';
import Task from './Task';
import Location from './Location';

class LocationPanel extends Component {
  constructor(props) {
    super(props)

  }
// classes and title should be dynamic.  data should be recieved from server
  render() {
    return (
      <div className="panel1">
        <header className={this.props.data.container}>
          <Location location={this.props.location} type= {this.props.data.type} />
        </header>
        <div className='statistic-label'> {this.props.data.title}</div>
      </div>
    );
  }

}
;

const mapState = ({tasks}) => ({tasks});
export default connect(mapState)(LocationPanel);