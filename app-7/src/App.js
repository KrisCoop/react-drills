import React, { Component } from "react";
import NewTask from './NewTask';
import List from './List';
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor(){
    super()

    this.state={
      list: []
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask(val){
    this.setState({
      list: [...this.state.list, val]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
