import React, {Component} from 'react';

export default class Calendar extends Component {
  render() {
    return (
      <div className="panel1">
        <iframe src="https://calendar.google.com/calendar/embed?src=tconn89%40gmail.com&ctz=America%2FNew_York" style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe> 
      </div>
    );
  }

}
