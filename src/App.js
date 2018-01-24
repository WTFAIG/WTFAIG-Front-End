import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import MyPlaces from "./components/MyPlaces";
import NewPlace from "./components/AddANewPlace";
import LoginView from "./components/LoginView";
import LikedPlaces from "./components/LikedPlaces";
import SignupForm from "./components/SignupForm";
import Login from "./components/Login";

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
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={LoginView} />
          <Route path="/addPlace" component={NewPlace} />
          <Route
            path="/myPlaces"
            render={() => <MyPlaces places={this.state.places} />}
          />
          <Route path="/likedPlaces" component={LikedPlaces} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/login" component={LoginView} />
        </div>
      </Router>
    );
  }
}

export default App;
