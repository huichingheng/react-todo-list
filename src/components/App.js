import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList.js"


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList title="home todos" todos={["eat", "sleep", "play"]} />
        <TodoList title="work todos" todos={["play", "sleep", "eat"]} />
      </div>
    );
  }
}

export default App;
