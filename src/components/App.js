import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList.js";
import HelloWorld from "./HelloWorld";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <TodoList title="Home Todos" todos={["eat", "sleep", "play", "code"]} />
        <TodoList title="Work Todos" todos={["html", "css", "javascript", "react"]}
        />
      </div>
    );
  }
}

export default App;
