import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Graph from './Graph';
import Panel from './Panel';
import Container from './Container';
import Container_Row from './Container_Row';
import { getCoffeeIndex, getLastDays } from '../redux/reducers/coffee-api';
import store from '../redux/store'

class Row extends Component {
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
            <Panel data = { this.m_data } coffeeObj = { this.props.coffeeObj } />
            <Panel data = { this.drink_data } coffeeObj = { this.props.coffeeObj } />
          </Container>
          <Container chart = {true}>
            <Graph user_id= {this.props.graph.user_id} id = {this.props.graph.id} />
          </Container>
        </Container_Row>
      </div>
    )
  }
  componentDidMount() {
  }
}

export default Row;