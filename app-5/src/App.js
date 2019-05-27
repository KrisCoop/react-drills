import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import image from "./components/image.js"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Image imageURL={"https://placeholder.com/"}/>
      </div>
    );
  }
}

export default App;
