import React, {Component} from 'react';
import { connect } from 'react-redux';
import createCharts from '../coffee-data'
import { getLastDays } from '../redux/reducers/coffee-api';
import store from '../redux/store';

class Graph extends Component {
  constructor(props){
    super(props);
    this.config = {
      id: props.id
    }
  }
  render() {
    return (
        <div className="charts-container">
          <div className="charts-panel">
            <canvas id={this.props.id}></canvas></div></div>
    )
  }

  shouldComponentUpdate(prevProps){
    return true;
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.days){
      this.config.data = nextProps.days.coffeeCups
      createCharts(this.config)
    }
  }
  // componentDidUpdate(){
  //   console.log(this.props)
  //   if(this.props.coffee)
  //     console.log(this.props.coffee.coffeeCups)
  // }
  componentDidMount() {
    getLastDays()(store.dispatch)
  }
}

const mapState = ({coffee, days}) => ({coffee, days});
const mapDispatch = { getLastDays }
export default connect(mapState, mapDispatch)(Graph);