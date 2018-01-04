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
    console.log("this home")
    console.log(this)
    if(this.props.coffeeAPI.coffee.user) this.coffeeObj = this.props.coffeeAPI
    else this.coffeeObj = {}
    var name = ""
    this.title = "..."
    if(this.coffeeObj.coffee){
      name = this.coffeeObj.coffee.user 
      this.title = `${name}'s Coffee Habits`
    }
    return (
      //  <Route path={`${this.props.match.url}/:user_id` } component={Spacer}/>
      <div>
        <NavBar />
        <Spacer />
        <div style={this.style}> { this.title } </div>
        <Row coffeeObj ={this.coffeeObj } graph = {this.graph1}/>
        <GPSRow coffeeObj ={this.coffeeObj } graph = {this.graph2}/>

      </div>
    )
  }
  componentWillReceiveProps(nextProps){
  }

  shouldComponentUpdate(){
    return true;
  }
  componentDidMount() {
    getCoffeeIndex(this.props.match.params.user_id)(store.dispatch)
  }
}

const mapState = ({coffeeAPI}) => ({coffeeAPI});
const mapDispatch = { getCoffeeIndex }
export default connect(mapState, mapDispatch)(Home);
