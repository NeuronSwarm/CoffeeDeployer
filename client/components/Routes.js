import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import Home from './Home';
import Singularity from './Singularity';
import Login from './auth/Login';
import Register from './auth/Register';
import CupUpdater from './CupUpdater';
import { getCoffeeIndex } from '../redux/reducers/coffee-api';
import WidgetGenerator from './WidgetGenerator';



const m_routes = {
  path: '/'
}
const Routes = ({getCoffeeIndex}) => {
  return (
    <Router history={browserHistory} >
      <Route exact path= '/' component= {Singularity} />
      <Route path= '/dashboard' component= {Home}/>
      <Route path= '/coffee-update' component= {CupUpdater} />
      <Route path= '/login' component= {Login} />
      <Route path= '/register' component= {Register} />
      <Route path= '/countDown' component= {Singularity} />
      <Route path= '/widget' component= {WidgetGenerator} />
      <Route path= '*' component= {Singularity} />
    </Router>
  )
};

const mapState = ({tasks}) => ({tasks});
const mapDispatch = {getCoffeeIndex};

export default connect(mapState, mapDispatch)(Routes);