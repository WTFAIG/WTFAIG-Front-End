import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Where The Fuck Am I Going?</h1>
          <h3>An app to keep track of places</h3>
          <Link to="/">
            <button title="Login">Login</button>
          </Link>
          <Link to="/addPlace">
            <button title="Add A New Place" color="blue">
              Add A New Place
            </button>
          </Link>
          <Link to="/myPlaces">
            <button title="My Places">My Places</button>
          </Link>
          <Link to="/likedPlaces">
            <button title="Places I like">Places I like</button>
          </Link>
        </header>
      </div>
    );
  }
}

export default Header;
