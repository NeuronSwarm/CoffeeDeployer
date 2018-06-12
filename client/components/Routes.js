import React from 'react';
import {Switch, Route, browserHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import Home from './Home';
import Singularity from './Singularity';
import Login from './auth/Login';
import Register from './auth/Register';
import CupUpdaterRoute from './CupUpdaterRoute';
import WidgetGenerator from './WidgetGenerator';
import TravelForm from './TravelForm';
import TravelResults from './TravelResults';
import UploadContainer from './UploadContainer';
import FormDirector from './FormDirector';
import GoogleLocation from './GoogleLocation';
import Users from './Users';

import Loader from './Loader'

const Routes = () => {
  return (
    <Switch>
      <Route exact path= '/dashboard/:user_id' component= {Home}/>
      <Route path= '/coffee-update' component= {CupUpdaterRoute} />
      <Route path= '/login' component= {Login} />
      <Route path= '/register' component= {Register} />
      <Route path= '/countDown' component= {Singularity} />
      <Route path= '/widget' component= {WidgetGenerator} />
      <Route path= '/travel' component= {TravelForm} />
      <Route path= '/form/:form_name' component= {FormDirector} />
      <Route path= '/results' component= {TravelResults} />
      <Route path= '/users' component= {Users} />
      <Route path= '/upload' component= {UploadContainer} />
      <Route path= '/loading' component= {Loader} />
      <Route path= '/goog' component= {GoogleLocation} />
      <Route component= {Singularity} />
    </Switch>
  )
};

export default Routes;