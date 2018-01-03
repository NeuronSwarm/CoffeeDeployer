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
import { Router, Route} from 'react-router-dom'


class Home extends Component {
  constructor(props){
    super(props);
    this.style = { fontSize: '36px',
                   margin: "10px 0",
                   marginLeft: "5%",
                   textTransform: 'capitalize' }
    var config = { lastDays: [] }; 
    this.graph1 = { id: "chart1", config,
                    user_id: this.props.match.params.user_id}
    this.graph2 = { id: "chart2", config,
                    user_id: this.props.match.params.user_id }
  }

  render() {
    if(this.state) this.props.coffee = this.state.coffee
    console.log(this.props.coffee)
    var name = ""
    if(this.props.coffee) name = this.props.coffee.coffee.user 
    return (
      //  <Route path={`${this.props.match.url}/:user_id` } component={Spacer}/>
      <div>
        <NavBar />
        <Spacer />
        <div style={this.style}> { name + "'s Coffee Habits" } </div>
        <Row coffeeObj ={this.props.coffee} graph = {this.graph1}/>
        <GPSRow coffeeObj ={this.props.coffee} graph = {this.graph2}/>

      </div>
    )
  }
  componentDidMount() {
    console.log("Home mounted");
    console.log(this.props.match.params.user_id)
    getCoffeeIndex(this.props.match.params.user_id)(store.dispatch)
  }
}

const mapState = ({coffee}) => ({coffee});
const mapDispatch = { getCoffeeIndex }
export default connect(mapState, mapDispatch)(Home);
