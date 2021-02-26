import React, { Component } from 'react'

export default class Login extends Component {
  handleCloser = (msg) => (e) => {
    console.log(`call clousersssssssssssssssss ${msg}`, e);
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleCloser('called closer')}>Button</button>
      </div>
    )
  }
}
