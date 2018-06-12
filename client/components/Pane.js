import React, {Component} from 'react';

class Panel extends Component {
  constructor(props) {
    super(props)
  }
  calcTime(){
    if(this.props.timeStamp){
      const d = new Date(this.props.timeStamp)
      return d.toDateString() + ' ' + d.getHours() + ':' + d.getMinutes()
    }
    return ''
  }
// classes and title should be dynamic.  data should be recieved from server
  render() {
    return (
      <div className="panel1">
        <header className='title-container'>
          { this.props.children }
        </header>
        <div className='statistic-label'> Address </div>
        <header className='title-container'>
          { this.calcTime() }
        </header>
        <div className='statistic-label'> TimeStamp </div>
      </div>
    );
  }

}
;

export default Panel;