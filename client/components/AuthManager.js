import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { authCheck } from '../redux/reducers/coffee-api';
import Loader from './Loader'
import Login from './auth/Login'

class AuthManager extends Component {
  constructor(props){
    super(props);
  }

  authorizedRender(){
    if(this.props.coffeeAPI.authResponse){
      if(this.props.coffeeAPI.auth.loggedIn)
        return this.props.children
      else
        return <Login redirect={true} />
    }
    else
      return <Loader/>

  }
  render() {
    return (
      <div >
        { this.authorizedRender() }
      </div>
    )
  }

  componentDidMount(){
    authCheck()
  }
}

const mapState = ({coffeeAPI}) => ({coffeeAPI});
export default connect(mapState)(AuthManager);