import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {navStyle: {}}
  }
  componentDidMount(){
    var width = ReactDOM.findDOMNode(this).parentNode.offsetWidth
    this.setState({navStyle: { width: width } })
  }

  render(){
    return (
      <nav style={this.state.navStyle} className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/dashboard">CoffeeLux</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a href="/coffee-update">Update</a>
              </li>
              <li>
                <a href="/widget">Widgets</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
