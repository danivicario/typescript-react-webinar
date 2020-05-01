import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import TodoItem from "./TodoItem";
import ITask from "./ITask";
// import TodoItem from "./todoItem";

interface MyState {
  tasks: ITask[];
  newTask: string;
}

class App extends React.Component {
  state: MyState = {
    tasks: [
      {
        id: "1",
        name: "tarea A",
        timestamp: "12/12/2010",
        isDone: !false,
        isFav: false
      },
      {
        id: "2",
        name: "tarea B",
        timestamp: "18/12/2013",
        isDone: false,
        isFav: !false
      },
      {
        id: "3",
        name: "tarea C",
        timestamp: "1/1/2020",
        isDone: !false,
        isFav: !false
      }
    ],
    newTask: "ir a la pelu"
  };

  // todo: add keyboard event
  updateNewTask(e:any) {
    this.setState({
      ...this.state,
      newTask: e.target.value
    })
  }

  render() {
    return (
      <div className={`App bg1`}>
        <div className="inner-wrapper">
          <input type="text" value={this.state.newTask} className="new-task" onChange={(e) => this.updateNewTask(e)}/>
          {this.state.tasks.map((task, idx) => (
            <TodoItem {...task} key={task.id}></TodoItem>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
