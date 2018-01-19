import React, {Component} from 'react';
import { connect } from 'react-redux';
import Spacer from './Spacer';
import NavBar from './NavBar'
import store from '../redux/store'


class FormBrowser extends Component {
  constructor(props){
    super(props);
    this.style = { fontSize: '36px',
                   margin: "10px 0",
                   marginLeft: "5%",
                   textTransform: 'capitalize' }
    this.forms = ['roughian', 'travel', 'life', 'MultiGame']
  }

  render() {
    var name = ""
    return (
      <div>
        <NavBar />
        <Spacer />
        <div style={this.style}> Misguided User Questions </div>
        <div>
          { this.forms.map((form) => <div style={this.style} key={user.id}><button className="btn btn-default"  onClick={ () => {location.replace(`form/${form}`)} } > {form} </button></div>) }
        </div>
      </div>
    )
  }
}

export default FormBrowser