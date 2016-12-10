import React, { Component } from 'react';
import './App.css';
import Todo from './components/todo';
import NavBar from './components/todo-nav';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container app-container">
          <div className="row app-row">
            <Todo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
