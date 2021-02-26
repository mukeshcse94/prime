import React, { Component } from 'react';


function fruitesFun(a, b){ 
  return console.log(this.apple, a, b);
};

const bindFruites = fruitesFun.bind({apple:'Apple'}, 'a', 'b');

function callFun(c, d){
  return console.log(this.book, c, d);
}

function applyFun(e,f){
  console.log(this.cat, e, f);
}

export default class Login extends Component {
  handleBind = () => {
    bindFruites();
    callFun.call({book: 'Book'}, 'c', 'd')
    applyFun.apply({cat: 'Cat'}, ['e', 'f'])
  }
  render() {
    return (
      <div>
        {this.handleBind()}
      </div>
    )
  }
}
