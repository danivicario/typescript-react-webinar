import React, { ChangeEvent } from "react";
import allPrecreatedTasks from "./allTasks";
import "./css/App.css";
import ITask from "./ITask";
import TodoItem from "./TodoItem";

interface AppState {
  tasks: ITask[];
  newTask: string;
}

class App extends React.Component {
  state: AppState = {
    tasks: allPrecreatedTasks,
    newTask: ""
  };

  createNewTask(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 13 && this.state.newTask.trim() !== "") {
      const allTasks = [...this.state.tasks];
      allTasks.push({
        id: Math.round(Math.random() * 1000000).toString(),
        timestamp: "12/12/2012",
        name: this.state.newTask,
        isFav: false,
        isDone: false
      });
      this.setState({
        ...this.state,
        tasks: allTasks,
        newTask: ""
      });
    }
  }

  updateNewTask(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;

    this.setState({
      ...this.state,
      newTask: target.value
    });
  }

  setAsDone(id: string): void {
    let allTasks = [...this.state.tasks];
    let selectedTask: ITask | undefined = allTasks.find((task) => task.id === id);
    if (selectedTask !== undefined) selectedTask.isDone = !selectedTask.isDone;

    this.setState({
      ...this.state,
      allTasks: allTasks
    });
  }

  setAsDeleted(id: string) {
    let allTasks = [...this.state.tasks];

    allTasks.splice(
      allTasks.findIndex((task) => task.id === id),
      1
    );

    this.setState({
      ...this.state,
      tasks: allTasks
    });
  }

  setTaskAsFav(id: string) {
    let allTasks = [...this.state.tasks];
    let selectedTask: ITask | undefined = allTasks.find((task) => task.id === id);
    if (selectedTask !== undefined) selectedTask.isFav = !selectedTask.isFav;

    this.setState({
      ...this.state,
      allTasks: allTasks
    });
  }

  render() {
    return (
      <div className={`App bg1`}>
        <div className="inner-wrapper">
          <input
            type="text"
            value={this.state.newTask}
            className="new-task"
            onKeyDown={(e) => this.createNewTask(e)}
            onChange={(e) => this.updateNewTask(e)}
            placeholder="Write new task"
          />
          {this.state.tasks.filter((task) => !task.isDone).length > 0 && (
            <h1>To do - {this.state.tasks.filter((task) => !task.isDone).length}</h1>
          )}
          {this.state.tasks
            .filter((task) => !task.isDone)
            .map((task) => (
              <TodoItem
                {...task}
                key={task.id}
                setAsDone={() => this.setAsDone(task.id)}
                deleteTask={() => this.setAsDeleted(task.id)}
                setTaskAsFav={() => this.setTaskAsFav(task.id)}
              ></TodoItem>
            ))}

          {this.state.tasks.filter((task) => task.isDone).length > 0 && (
            <h1>Done - {this.state.tasks.filter((task) => task.isDone).length}</h1>
          )}
          {this.state.tasks
            .filter((task) => task.isDone)
            .map((task) => (
              <TodoItem
                {...task}
                key={task.id}
                setAsDone={() => this.setAsDone(task.id)}
                deleteTask={() => this.setAsDeleted(task.id)}
                setTaskAsFav={() => this.setTaskAsFav(task.id)}
              ></TodoItem>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
