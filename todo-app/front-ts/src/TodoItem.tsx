import React from "react";
import ITask from "./ITask";
import "./css/TodoItem.css";

export default class TodoItem extends React.Component<ITask> {
  render() {
    return (
      <div className="todo-item">
        <span>{this.props.name}</span>
        <div>
          <span>{this.props.timestamp}</span>
          <span>{this.props.isFav && "fav"} </span>
          <span>{this.props.isDone && "done!"}</span>
        </div>
      </div>
    );
  }
}
