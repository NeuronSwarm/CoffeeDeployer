import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SimpleButton from './SimpleButton';
import AuthManager from './AuthManager';
import CupUpdater from './CupUpdater';
import Spacer from './Spacer';

class CupUpdaterRoute extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Spacer/>
        <AuthManager>
          <CupUpdater/>
        </AuthManager>
      </div>
    )
  }
}

export default CupUpdaterRoute