import React, {Component} from 'react';
import InstallDirections from './InstallDirections';
import NavBar from './NavBar';
import SliderForm from './SliderForm';
import StartQuote from './StartQuote';
import initState from '../init-state';
import syntaxHighlight from '../syntax-highlight';
import SpacerThird from './SpacerThird';
import MinimalLayout from './MinimalLayout';


class TravelResults extends Component {
  constructor(props) {
    super(props)
    initState( {}, this)

  }
  getResults(){
    return syntaxHighlight(localStorage.getItem('sampleForm'))
  }


  render() {
    return (
      <div >
        <NavBar />
        <MinimalLayout>
          <div>
            <h2> THANK YOU </h2>
            <div style={{marginBottom: '100px'}}> We'll be in touch soon with an amazing quote. </div>
            
            <h3> Debug Panel </h3>
            <div style={ { padding: '0 5%' } }>
              <pre dangerouslySetInnerHTML={ { __html: this.getResults() } }>
              </pre> 
            </div>
          </div>
        </MinimalLayout>

      </div>
    );
  }

}

export default TravelResults;