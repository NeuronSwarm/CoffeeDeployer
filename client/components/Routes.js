import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import Home from './Home';
import Singularity from './Singularity';
import Login from './auth/Login';
import CupUpdater from './CupUpdater';
import ConfigForm from './ConfigForm';
import { getCoffeeIndex } from '../redux/reducers/coffee-api';



const m_routes = {
  path: '/'
}
const Routes = ({getCoffeeIndex}) => {
  return (
    <Router history={browserHistory} >
      <Route exact path= '/' component= {Singularity} />
      <Route path= '/react-app' component= {Home}/>
      <Route path= '/coffee-update' component= {CupUpdater} />
      <Route path= '/login' component= {Login} />
      <Route path= '/countDown' component= {Singularity} />
      <Route path= '/widget' component= {ConfigForm} />
      <Route path= '*' component= {Singularity} />
    </Router>
  )
};

const mapState = ({tasks}) => ({tasks});
const mapDispatch = {getCoffeeIndex};

export default connect(mapState, mapDispatch)(Routes);