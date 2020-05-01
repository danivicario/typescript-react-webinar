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
          <input type="button" onClick={() => this.props.deleteTask()} value="🗑" className="🦄" />
          <input type="checkbox" checked={this.props.isDone} onChange={(e) => this.props.setAsDone(e)}/>
        </div>
      </div>
    );
  }
}
