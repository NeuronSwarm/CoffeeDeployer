import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Section from './Section';
import Graph from './Graph';
import Panel from './Panel';
import Container from './Container';
import Row from './Row';
import { getAllTasks } from '../redux/reducers/reducer';

class Home extends Component {
  constructor(props){
    super(props);
    this.m_data= { title: "Today's Cups",
                   type: "TODAY",
                   cups: 'cups-today',
                   container: 'title-container',
                   cupCount: 5}
    this.drink_data= { title: "Last Cup",
                   type: "LAST_CUP",
                   cups: 'cups-today',
                   container: 'title-container',
                   time: '6:02pm'}
    this.graph1 = { id: "chart1" }
    this.graph2 = { id: "chart2" }
  }


  render() {
    return (
      <div>
        <Row graph = {this.graph1}/>
        <Row graph = {this.graph2}/>
      </div>
    )
  }
  componentDidMount() {
    console.log("Home mounted");
    getAllTasks();
  }
}

const mapState = ({tasks}) => ({tasks});
const mapDispatch = {getAllTasks};
export default connect(mapState, mapDispatch)(Home);