import React, {Component} from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import Spacer from './Spacer';
import Row from './Row';
import GPSRow from './GPSRow';
import NavBar from './NavBar'
import store from '../redux/store'
import { getUsersIndex } from '../redux/reducers/user-api';
import { Router, Route} from 'react-router-dom'


class Users extends Component {
  constructor(props){
    super(props);
    this.style = { fontSize: '36px',
                   margin: "10px 0",
                   marginLeft: "5%",
                   textTransform: 'capitalize' }
    var config = { lastDays: [] }; 
    this.graph1 = { id: "chart1", config}
    this.graph2 = { id: "chart2", config}
    this.state = { users: [] }
    this.style = { padding: '5px'}
  }

  render() {
    var name = ""
    if(this.props.coffee) name = this.props.coffee.user 
    return (
      //  <Route path={`${this.props.match.url}/:user_id` } component={Spacer}/>
      <div>
        <NavBar />
        <Spacer />
        <div style={this.style}> Coffee Addicted Users </div>
        <div>
          { this.state.users.map((user) => <div style={this.style} key={user.id}><button className="btn btn-default"  onClick={ () => {location.replace(`dashboard/${user.id}`)} } > {user.username} </button></div>) }
        </div>
      </div>
    )
  }
  componentDidMount() {
    console.log("Home mounted");
    getUsersIndex()(store.dispatch)
  }
  shouldComponentUpdate(nextProps){
    console.log("Updating..");
    console.log(nextProps);
    this.state.users  = nextProps.users.users
    return true
  }
}

const mapState = ({users}) => ({users});
const mapDispatch = { getUsersIndex };
export default connect(mapState, mapDispatch)(Users);