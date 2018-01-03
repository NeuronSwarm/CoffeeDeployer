import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Graph from './Graph';
import Panel from './Panel';
import LocationPanel from './LocationPanel';
import Container from './Container';
import Container_Row from './Container_Row';
import NativeGPS from '../lib/native-gps';

class GPSRow extends Component {
  constructor(props){
    super(props);
    this.locationLabels= { title: "Current Location",
                   type: "TODAY",
                   cups: 'cups-today',
                   container: 'title-container',
                   cupCount: 5}
    this.drink_data= { title: "Last Cup",
                   type: "LAST_CUP",
                   cups: 'cups-today',
                   container: 'title-container',
                   time: '6:02pm'}
    this.state = {address: 'Search..'}
  }

  render() {
    return (
      <div>
        <Container_Row>
          <Container>
            <LocationPanel location = {this.state.address} data = { this.locationLabels } coffee = { this.props.coffee } />
            <Panel data = { this.drink_data } coffeeObj = { this.props.coffeeObj } />
          </Container>
          <Container chart = {true}>
            <Graph user_id = {this.props.graph.user_id} id = {this.props.graph.id} />
          </Container>
        </Container_Row>

      </div>

    )
  }
  componentDidMount() {
    console.log("GPSRow mounted");
    var nativeGPS = new NativeGPS();
    nativeGPS.getCurrentLocation((position) => {
      this.setState({ address: position.formatted_address})
    })
  }
}

const mapState = ({coffee}) => ({coffee});
export default connect(mapState)(GPSRow);