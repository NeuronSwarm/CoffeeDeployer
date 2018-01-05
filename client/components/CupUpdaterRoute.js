import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SimpleButton from './SimpleButton';
import AuthManager from './AuthManager';
import CupUpdater from './CupUpdater';

class CupUpdaterRoute extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <AuthManager>
        <CupUpdater/>
      </AuthManager>
    )
  }
}

export default CupUpdaterRoute