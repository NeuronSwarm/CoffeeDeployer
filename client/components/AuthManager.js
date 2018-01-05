import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { authCheck } from '../redux/reducers/coffee-api';
import Loader from './Loader'

class AuthManager extends Component {
  constructor(props){
    super(props);
  }

  authorizedRender(){
    if(this.props.coffeeAPI.authResponse){
      if(this.props.coffeeAPI.auth.loggedIn)
        return this.props.children
      else
        return <OopsLogin/>
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