import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//   constructor(props) { 
//     this.name = "Mike";
//   }
//   getGreeting() {
//     return `Hi. My name is ${this.name}`;
//   }
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax.getGreeting());

// // ----------
// // for the new syntax the binding is not necessary

// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return `Hi. My name is ${this.name}`;
//   }
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax.getGreeting());