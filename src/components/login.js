import React, { Component } from 'react'

const callClouse = (msg) => (e) => {
  console.log(`show message ${msg}`);
}

export default class Login extends Component {
  render() {
    return (
      <div>
        <button onClick={callClouse('call')}>Button</button>
      </div>
    )
  }
}
