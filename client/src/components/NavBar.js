import React, { Component } from 'react';
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className= "nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">About Me</li>
            <li className="nav-item">Experience</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Skills</li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;