import React from "react";
import axios from "axios";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";

export default class TodoList extends React.Component {
  state = {
    newTask: "",
    todo: [],
    done: []
  };

  _updateAllTasks() {
    axios.get("http://localhost:4000/tasks/all").then(allTasks => {
      allTasks = allTasks.data;

      this.setState({
        newTask: "",
        todo: allTasks.filter(task => !task.done),
        done: allTasks.filter(task => task.done)
      });
    });
  }

  componentDidMount() {
    this._updateAllTasks();
  }

  updateExistingTask(id, done) {
    axios
      .put(`http://localhost:4000/tasks/${id}`, {
        done: !done
      })
      .then(_ => this._updateAllTasks());
  }

  updateExistingTaskName(id, newName) {
    axios
      .put(`http://localhost:4000/tasks/${id}`, {
        name: newName
      })
      .then(_ => this._updateAllTasks());
  }

  deleteExistingTask(id) {
    axios.delete(`http://localhost:4000/tasks/${id}`).then(_ => this._updateAllTasks());
  }

  favExistingTask(id, fav) {
    axios
      .put(`http://localhost:4000/tasks/${id}`, {
        fav: !fav
      })
      .then(_ => this._updateAllTasks());
  }

  updateNewTask(e) {
    this.setState({
      ...this.state,
      newTask: e.target.value
    });
  }

  checkEnter(e) {
    if (e.keyCode === 13) {
      axios
        .post("http://localhost:4000/tasks", {
          name: this.state.newTask
        })
        .then(_ => this._updateAllTasks());
    }
  }

  render() {
    return (
      <section className="TodoList">
        <input
          type="text"
          placeholder="add new task"
          id="add-task"
          value={this.state.newTask}
          onChange={e => this.updateNewTask(e)}
          onKeyDown={e => this.checkEnter(e)}
        />
        <section className="to-do">
          {this.state.todo.length > 0 && (
            <React.Fragment>
              <h1>To do ({this.state.todo.length})</h1>
              <ul>
                {this.state.todo.map(task => (
                  <li key={task._id}>
                    <TodoItem
                      {...task}
                      onDeleteTask={id => this.deleteExistingTask(id)}
                      onTaskFav={(id, fav) => this.favExistingTask(id, fav)}
                      onTaskClicked={(id, done) => this.updateExistingTask(id, done)}
                      onUpdateTaskName={(id, newName) => this.updateExistingTaskName(id, newName)}
                    ></TodoItem>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          )}
        </section>

        <section className="done">
          <h1>Done ({this.state.done.length})</h1>
          <ul>
            {this.state.done.map(task => (
              <li key={task._id}>
                <TodoItem
                  {...task}
                  onDeleteTask={id => this.deleteExistingTask(id)}
                  onTaskFav={id => this.favExistingTask(id)}
                  onTaskClicked={(id, done) => this.updateExistingTask(id, done)}
                  onUpdateTaskName={(id, newName) => this.updateExistingTaskName(id, newName)}
                ></TodoItem>
              </li>
            ))}
          </ul>
        </section>
      </section>
    );
  }
}
