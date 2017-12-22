import React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import { login} from '../../redux/reducers/coffee-api';

export default class SimpleForm extends React.Component {
  constructor(props){
    super(props)
  }
  handleChange(values) {  }
  handleUpdate(form) {  }
  handleSubmit(values) { this.props.formDispatcher(values,
                         this.success,
                         () => {console.log('dispatch failed')} )
                        }
  success(){
    location.replace(this.props.onSuccess)
  }
  render() {
    return (
      <LocalForm
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
        onSubmit={(values) => this.handleSubmit(values)}
      >
        <div  className="padding"> 
        <Control.text model=".username" placeholder="User"/>
        </div> 
        <div className="padding"> 
        <Control.text model=".password" placeholder="Pass"/>
        </div> 
        {this.props.children}
      </LocalForm>
    );
  }
}