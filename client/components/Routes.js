import React from 'react';
import {Router, Route, browserHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import Home from './Home';
import Singularity from './Singularity';
import Login from './auth/Login';
import Register from './auth/Register';
import CupUpdaterRoute from './CupUpdaterRoute';
import WidgetGenerator from './WidgetGenerator';
import Users from './Users';

import Loader from './Loader'

const Routes = () => {
  return (
    <div>
      <NavBar />
      <Route exact path= '/' component= {Singularity} />
      <Route exact path= '/dashboard/:user_id' component= {Home}/>
      <Route path= '/coffee-update' component= {CupUpdaterRoute} />
      <Route path= '/login' component= {Login} />
      <Route path= '/register' component= {Register} />
      <Route path= '/countDown' component= {Singularity} />
      <Route path= '/widget' component= {WidgetGenerator} />
      <Route path= '/users' component= {Users} />
      <Route path= '/loading' component= {Loader} />
    </div>
  )
};

export default Routes;