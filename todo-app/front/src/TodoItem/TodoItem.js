import React from "react";
import "./TodoItem.scss";
import axios from "axios";
import moment from "moment";

export default class TodoItem extends React.Component {
  setTaskAsDone(id, done) {
    this.props.onTaskClicked(id, done);
  }

  deleteTask(id) {
    this.props.onDeleteTask(id);
  }

  setTaskAsFav(id, fav) {
    this.props.onTaskFav(id, fav);
  }

  updateTaskName(id, newName) {
    this.props.onUpdateTaskName(id, newName);
  }

  render() {
    return (
      <section className={this.props.done ? "TodoItem item-done" : "TodoItem"}>
        <div className="name">
          {this.props.done && (
            <input
              type="checkbox"
              checked
              onChange={_ => this.setTaskAsDone(this.props._id, this.props.done)}
            />
          )}
          {!this.props.done && (
            <input
              type="checkbox"
              onChange={_ => this.setTaskAsDone(this.props._id, this.props.done)}
            />
          )}

          <input
            className="name"
            type="text"
            value={this.props.name}
            onChange={(e) => this.updateTaskName(this.props._id, e.target.value)}
          />
        </div>
        <div className="actions">
          <button onClick={() => this.setTaskAsFav(this.props._id, this.props.fav)}>
            {this.props.fav ? "★" : "☆"}
          </button>
          <button onClick={() => this.deleteTask(this.props._id)}>🗑</button>
          {/* <span>{moment(this.props.createdAt, "hh:mm").startOf('hour').fromNow()}</span> */}
          <span>{moment(this.props.createdAt).format("hh:mm")}</span>
        </div>
      </section>
    );
  }
}
