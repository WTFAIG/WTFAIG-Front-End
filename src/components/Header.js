import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Where The Fuck Am I Going?</h1>
          <h3>An app to keep track of places</h3>
          <button title="Add A New Place" color="blue">
            Add A New Place
          </button>
          <button title="My Places">My Places</button>
          <button title="Places I like">Places I like</button>
        </header>
      </div>
    );
  }
}

export default Header;
