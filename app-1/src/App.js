import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor() {
    super();
    this.state={
      userInput: ""
    }
  }
  doThing(value){
    this.setState({
      userInput: value
    })
  }



  render() {
    return (
      <div className="App">
      <input type="text" placeholder="words" onChange={ (e) => doThing(e.target.value)}></input>
      <h1>{this.state.userInput}</h1>
      
      </div>
    );
  }
}

export default App;
