import React, {Component} from 'react';
import NativeGPS from '../lib/native-gps';
import Pane from './Pane'

const getLat = (locations, location) => {
  console.log('Lat: ', locations[location].latitudeE7)
  return locations[location].latitudeE7
}
const getLng = (locations, location) => {
  console.log('Long: ', locations[location].longitudeE7)
  return locations[location].longitudeE7
}

class GoogleLocation extends Component {
  constructor(props) {
    super(props)
    this.state = { smallSet: []}

  }
// classes and title should be dynamic.  data should be recieved from server
  async componentDidMount(){
    const response =  await fetch('/locations')
    const { locations } = await response.json()

    // this.setState({smallSet: locations.splice(0,10)})
    const rando = Math.floor(Math.random() * locations.length)
    this.smallSet = locations.splice(rando, 4)
    console.log(this.smallSet.length)
    const index = locations.length -1
    this.gps = new NativeGPS()
    var self = this
    const positions = await Promise.all(this.smallSet.map((position) => self.address(position)))
    this.setState({smallSet: positions})
    console.log(positions)
    // const position = await this.gps.get(getLat(locations, index)/10000000, getLng(locations, index)/10000000 )
    // if(typeof position !== 'string'){
    //   console.log('Address: ', position.formatted_address)
    // }
    // else console.log('Error: ', position)
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
        { this.state.smallSet.map((item, index) => <Pane key={index} timeStamp={parseInt(this.smallSet[index].timestampMs)}> { item.formatted_address } </Pane>) }
        
      </div>
    );
  }

}

export default GoogleLocation