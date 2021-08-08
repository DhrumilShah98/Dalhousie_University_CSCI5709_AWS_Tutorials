import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:5000/")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{this.state.apiResponse}</h1>
              <p className="App-intro">This is Srikrishnan. Hi!!</p>
              <p className="App-intro">This is Vishal. Hi!!</p>
              <p className="App-intro">This is Dhrumil. Hi!!</p>
              <p classname="App-intro">This is Parth. Hi!</p>
              <p classname="App-intro">This is Sriram. Hi!!</p>
          </header>
        </div>
    );
  }
}

export default App;
