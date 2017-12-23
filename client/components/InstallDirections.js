import React, {Component} from 'react';
import {connect} from 'react-redux';
import Task from './Task';
import { getAllTasks } from '../redux/reducers/reducer';

class InstallDirections extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="container">
        <header className="major">
          <h2>Congratz!</h2>
          <h4>Your new widget is ready to be installed</h4>
        </header>
        <div> Just copy and paste the generated code into your site</div>
        <div>Examples: </div>
        <ul>
          <li >
            <a href="https://codepen.io/tconn89/pen/zpoBWV" target="blank"> Ty's coffee counter </a>
          </li >
          <li >
            Static site
          </li >
          <li >
            Wordpress
          </li >
        </ul>
      </section>
    );
  }

}
;

export default InstallDirections;