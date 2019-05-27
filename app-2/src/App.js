import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor() {
    super();
    this.state={
      listOfFood: ["Bacon", "Mozzarella", "Raspberries", "Peanut Butter", "Cream"]
    }
  }

  render() {
    const food = this.state.listOfFood.map((e)=> <h2>{e}</h2>)
    return (
      <div className="App">
        {food}
      </div>
    );
  }
}

export default App;
