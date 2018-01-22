import React, { Component } from "react";

class MyPlaces extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="MyPlaces">
        <h1>My Prop is {this.props.places}.</h1>
        <button id={this.props.key} onClick={this.props.handleOnClick}>
          Change My State
        </button>
      </div>
    );
  }
}

export default MyPlaces;
