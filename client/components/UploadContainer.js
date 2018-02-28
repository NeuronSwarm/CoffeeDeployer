import React, {Component} from 'react';
import MinimalLayout from './MinimalLayout';
import Uploader from './Uploader';
import NavBar from './NavBar';


class UploadContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div >
        <NavBar />
        <MinimalLayout >
          <div >
            <Uploader/>
          </div>
        </MinimalLayout >

      </div>
    );
  }

}

export default UploadContainer;