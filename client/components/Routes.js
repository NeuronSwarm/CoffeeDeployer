import React from 'react';
import {Router, Route, browserHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './Home';
import Singularity from './Singularity';
import Login from './auth/Login';
import Register from './auth/Register';
import CupUpdater from './CupUpdater';
import WidgetGenerator from './WidgetGenerator';
import Users from './Users';



const Routes = () => {
  return (
    <div>
      <Route exact path= '/' component= {Singularity} />
      <Route exact path= '/dashboard' component= {Home}/>
      <Route path= '/dashboard/:user_id' component= {Home}/>
      <Route path= '/coffee-update' component= {CupUpdater} />
      <Route path= '/login' component= {Login} />
      <Route path= '/register' component= {Register} />
      <Route path= '/countDown' component= {Singularity} />
      <Route path= '/widget' component= {WidgetGenerator} />
      <Route path= '/users' component= {Users} />
    </div>
  )
};

export default Routes;