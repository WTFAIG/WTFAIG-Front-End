import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Switch } from "react-router";
import Header from "./components/Header";
import MyPlaces from "./components/MyPlaces";
import NewPlace from "./components/AddANewPlace";

class App extends Component {
  constructor() {
    super();
    this.state = {
      places: "I'm a state",
      key: "1"
    };
  }

  handleOnClick(e) {
    console.log(e.target.key);
    this.setState({
      places: ["I'm a new place", "I'm another new place"]
    });
  }

  componentWillMount() {
    // this is where the API requests go
    // this is how you make it render database info on load
    this.setState({
      places: [
        {
          name: "Sin",
          heart: true,
          notes: "good coffee",
          checkmark: true
        },
        {
          name: "Schastea",
          heart: true,
          notes: "great tea",
          checkmark: true
        },
        {
          name: "Coffee Exchange",
          heart: true,
          notes: "great coffee",
          checkmark: false
        }
      ]
    });
  }

  loopOverPlaces() {
    return this.state.places.map((myPlace, index) => {
      return (
        <MyPlaces
          places={myPlace}
          key={index}
          handleOnClick={this.handleOnClick.bind(this)}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <MyPlaces places={this.state.places} />
        <NewPlace />
      </div>
    );
  }
}

export default App;
