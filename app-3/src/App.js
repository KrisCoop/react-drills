import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state={
      cheatFoods = ["Twizzlers", "Oreos", "Doritos", "Donuts", "Pizza"],
      userInput = ""
    }
  }

  doThing(val){
    this.setState({
      userInput: val
    })
  }

  render() {
    let foodList = this.state.cheatFoods.filter((e)=> e.includes(this.state.userInput)).map <h2>{e}</h2>
    return (
      <div className="App">
          <input type="text" onChange={(e)=> doThing(e.target.value)}></input>
          {foodList}
      </div>
    );
  }
}

export default App;
