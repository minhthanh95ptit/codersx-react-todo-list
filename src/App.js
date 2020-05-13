import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.todos = [
      'Eating',
      'Sleeping',
      'Coding'
    ]
  }
  render() {
    return (
      <div className="App">
        <ul>
          {
            this.todos.map(item => <li> {item}</li>)
          }
        </ul>
           
      </div>
    );
  }
  
}
export default App;