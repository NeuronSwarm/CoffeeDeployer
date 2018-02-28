import React, {Component} from 'react';
import { Control } from 'react-redux-form';
import initState from '../init-state'
import * as styles from '../styles/mainSheet/placeholders.css'

class AnswerTextList extends Component {
  constructor(props){
    super(props);
    // Need padding too
    this.inputStyle = { height: '40px',
                        width: '100%' }
    this.containerStyle = { paddingBottom: '15px' }
    initState({isNonEmpty: new Array(props.answer.list.length).fill(0)}, this)
  }
  assignIndex(index, bool){
    var indices = this.state.isNonEmpty;
    indices[index] = bool
    this.setState({isNonEmpty: indices})
  }
  handleNonEmpty(index){
    return (event) => { 
      if(event){
        if(event.target && event.target.value.length == 1){
          this.assignIndex(index, 1)
        }
        else if (event.target && event.target.value.length == 0){
          this.assignIndex(index, 0)
        }
        else return event;
        return event.target.value
      }
      return event
    }
  }
  assignClasses(classes, i){
    var baseClass = this.state.isNonEmpty[i] ? styles.nonEmpty : ''
    return `${baseClass} ${classes}`
  }

  render() {
    var list = this.props.answer.list
    return (
      <div>
      { list.map( (input, i) =>  
          <div className={styles.textContainer} key={i}
               style={this.containerStyle}>
            <Control.text model={input.model}  
                          getValue={this.handleNonEmpty(i).bind(this)}
                          className={this.assignClasses(styles.textInput, i)}
                          style={this.inputStyle} />
            <label className={styles.placeholder} >{input.placeholder}</label>
          </div>
        ) }
          
      </div>

    )
  }
  componentDidMount(){
  }
}

export default AnswerTextList;