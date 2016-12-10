import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    const aStyle = {
      color: '#606060',
    }
    return (
      <nav className="navbar navbar-light bg-faded" >
        <a className="navbar-brand" style={aStyle}>Todo App</a>
      </nav>
    )
  }
};

export default NavBar;
