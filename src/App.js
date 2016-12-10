import React, { Component } from 'react';
import './App.css';
import Todo from './components/todo';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="#">Bootstrap</a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-md-8">
              <Todo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
