import React from "react";
import "./css/TodoItem.css";
import ITodoItem from "./ITodoItem";

export default class TodoItem extends React.Component<ITodoItem> {
  render() {
    return (
      <div className="todo-item">
        <span>{this.props.name}</span>
        <div>
          <span className="date">{this.props.timestamp}</span>
          <button
            onClick={() => this.props.setTaskAsFav(this.props.id, this.props.isFav)}
            className="🦄"
          >
            {this.props.isFav ? "★" : "☆"}
          </button>
          <input type="button" onClick={() => this.props.deleteTask()} value="🗑" className="🦄" />
          <input
            type="checkbox"
            checked={this.props.isDone}
            onChange={(e) => this.props.setAsDone(e)}
          />
        </div>
      </div>
    );
  }
}
