import Dropzone from 'react-dropzone'
import React, {Component} from 'react';
import axios from 'axios'

export default class Uploader extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
    var data = new FormData()
    files.forEach((file, i) =>{
      data.append(`file${i}`, file)
    })
    axios.post(`/upload`, data,{"Content-Type": 'application/octet-stream'})
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.error.bind(err);
      })
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone className="inner-drop" onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped file(s)</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}
