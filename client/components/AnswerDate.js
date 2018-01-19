import React, {Component} from 'react';
import { Control } from 'react-redux-form';
import initState from '../init-state';
import DayPickerInput from 'react-day-picker/DayPickerInput';


class AnswerDate extends Component {
  constructor(props){
    super(props);
    this.dateStyle = { color:'black'}
    initState({selectedDay: new Date, isDisabled: false}, this)
  }
  dateFormat(date){
    return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
  }
  handleChange(props){
    return (selectedDay) => {
      this.setState({selectedDay});
      props.onChange(this.dateFormat(selectedDay))
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
                              dayPickerProps={calendarProps}
                              inputProps={{readOnly: true}} />
    }
    return (
      <div style={this.dateStyle}>
        <Control.text model={this.props.answer.dataModel}    
                 component={dateComponent.bind(this)}
                 defaultValue={this.dateFormat(new Date)}
                 className="date"
                 />
          
      </div>
    )
  }
}

export default AnswerDate;