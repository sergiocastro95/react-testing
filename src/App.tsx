import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's check your TODO list!</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="general-container">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
