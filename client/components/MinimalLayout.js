import React, {Component} from 'react';

class MinimalLayout extends Component {
  constructor(props){
    super(props);
  }

  SetPageHeight(){
    return {height: window.innerHeight}
  }
  render() {
    return (
      <div className={'mobile-container'} style={ this.SetPageHeight() }>
        <div className="appbox">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MinimalLayout;