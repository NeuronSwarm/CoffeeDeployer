import React, {Component} from 'react';
import { Router, Route} from 'react-router-dom'
import Home from './Home';

const Routes = () => {
  return (
    <div>
      <Route path= '/dashboard' component= {Home}/>
    </div>
  )
};

export default Routes;