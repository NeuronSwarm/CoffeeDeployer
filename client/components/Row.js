import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Graph from './Graph';
import Panel from './Panel';
import Container from './Container';
import Container_Row from './Container_Row';
import Row from './Row';
import { getCoffeeIndex, getLastDays } from '../redux/reducers/coffee-api';

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
  }

  render() {
    return (
      <div>
        <Container_Row>
          <Container>
            <Panel data = { this.m_data } coffee = { this.props.coffee } />
            <Panel data = { this.drink_data } coffee = { this.props.coffee } />
          </Container>
          <Container chart = {true}>
            <Graph id = {this.props.graph.id} onEnter={ getLastDays }/>
          </Container>
        </Container_Row>
      </div>
    )
  }
  componentDidMount() {
    console.log("Row mounted");
  }
}

const mapState = ({coffee}) => ({coffee});
const mapDispatch = { getCoffeeIndex };
export default connect(mapState, mapDispatch)(Home);