import React, { Component } from 'react'

export default class Login extends Component {
  state={
    mockData:'["VALUE1", "VALUE2", "VALUE3", "VALUE4", "VALUE5"]'
  };
  
  render() {
    const parseValue = JSON.parse(this.state.mockData);
    return (
      <div>
        {parseValue.map(items => {
          return <li>{items}</li>
        })}
      </div>
    )
  }
}
