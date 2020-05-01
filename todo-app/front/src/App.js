import React from "react";
import axios from "axios";
import "./sass/App.scss";
import TodoList from "./TodoList/TodoList";

export default class App extends React.Component {
  componentDidMount() {
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    document.querySelector("body").classList.add(`bg-${randomInt(1, 2)}`)
  }

  render() {
    return (
      <div className="App">
        <TodoList></TodoList>
      </div>
    );
  }
}
