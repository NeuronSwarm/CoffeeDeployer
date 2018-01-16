import React, {Component} from 'react';
import { Control } from 'react-redux-form';
import initState from '../init-state';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

class AnswerDate extends Component {
  constructor(props){
    super(props);
    this.dateStyle = { color:'black'}
    initState({selectedDay: new Date, isDisabled: false}, this)
  }
  dateFormat(date){
    return `${date.month()+1}/${date.date()}/${date.year()}`
  }
  handleChange(props){
    return (selectedDay) => {
      this.setState({selectedDay});
      props.onChange(selectedDay)
    }
  }
  render() {
    var dateComponent = (props) => {
      this.parentHandleChange = props.onChange
      var calendarProps = { selectedDays: this.state.selectedDay,
                            disabledDays: {
                              daysOfWeek: []
                            }
                          }
      return <DayPickerInput  value={this.state.selectedDay}
                              onDayChange={this.handleChange(props)}
                              dayPickerProps={calendarProps} />
    }
    return (
      <div style={this.dateStyle}>
        <Control.text model=".date"    
                 component={dateComponent.bind(this)}
                 />
          
      </div>
    )
  }
}

export default AnswerDate;