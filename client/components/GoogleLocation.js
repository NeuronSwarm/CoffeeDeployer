import React, {Component} from 'react';
import NativeGPS from '../lib/native-gps';
import Pane from './Pane'
import Loader from './Loader'

class GoogleLocation extends Component {
  constructor(props) {
    super(props)
    this.state = { smallSet: []}

  }
  async componentDidMount(){
    const response =  await fetch('/locations')
    const { locations } = await response.json()

    const fix = 10000000
    const position = { lat: locations[0].latitudeE7/fix, lng: locations[0].longitudeE7/fix }
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: position
    });
    var marker = new google.maps.Marker({
      position,
      map,
      title: 'Hello World!'
    });


    this.smallSet = locations
    this.gps = new NativeGPS()
    var self = this
    const positions = await Promise.all(this.smallSet.map((position) => self.address(position)))
    this.setState({smallSet: positions})

  }

  address(position){
    const fix = 10000000
    return this.gps.get(position.latitudeE7 / fix, position.longitudeE7 / fix)
  }
  render() {
    return (
      <div className="panel1">
        <header >
          Hello World
        </header>
        {
          this.state.smallSet.length === 0 ?
          <Loader /> :
          this.state.smallSet.map((item, index) => <Pane key={index} timeStamp={parseInt(this.smallSet[index].timestampMs)}> { item.formatted_address } </Pane>)
        }
        <div style={{height:'500px'}} id='map'/>
        
      </div>
    );
  }

}

export default GoogleLocation