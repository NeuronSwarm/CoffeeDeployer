import React, {Component} from 'react';
import InstallDirections from './InstallDirections';
import NavBar from './NavBar';
import SliderForm from './SliderForm';
import StartQuote from './StartQuote';
import initState from '../init-state';
import SpacerThird from './SpacerThird';
import MinimalLayout from './MinimalLayout';


class TravelResults extends Component {
  constructor(props) {
    super(props)
    initState( {}, this)
  }


  render() {
    return (
      <div >
        <NavBar />
        <MinimalLayout>
          <div>
            <h2> RESULTS </h2>
            
            <div style={ { padding: '0 5%' } }>
              <pre> {localStorage.getItem('sampleForm')} </pre>
            </div>
          </div>
        </MinimalLayout>

      </div>
    );
  }

}

export default TravelResults;