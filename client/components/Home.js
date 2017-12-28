import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Graph from './Graph';
import Panel from './Panel';
import Container from './Container';
import Spacer from './Spacer';
import Row from './Row';
import GPSRow from './GPSRow';
import NavBar from './NavBar'
import store from '../redux/store'
import { getCoffeeIndex } from '../redux/reducers/coffee-api';

class Home extends Component {
  constructor(props){
    super(props);
    this.style = { fontSize: '36px',
                   margin: "10px 0",
                   marginLeft: "5%",
                   textTransform: 'capitalize' }
    var config = { lastDays: [] }; 
    this.graph1 = { id: "chart1", config}
    this.graph2 = { id: "chart2", config}
  }


  render() {
    return (
      <div>
        <NavBar />
        <Spacer />
        <div style={this.style}> {this.props.coffee.user} </div>
        <Row graph = {this.graph1}/>
        <GPSRow graph = {this.graph2}/>
      </div>
    )
  }
  componentDidMount() {
    console.log("Home mounted");
    getCoffeeIndex()(store.dispatch)
  }
}

const mapState = ({coffee}) => ({coffee});
const mapDispatch = { getCoffeeIndex };
export default connect(mapState, mapDispatch)(Home);