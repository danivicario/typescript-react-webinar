import React from "react";
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
        isFav: false,
        setAsDone: undefined,
        deleteTask: undefined
      },
      {
        id: "2",
        name: "tarea B",
        timestamp: "18/12/2013",
        isDone: false,
        isFav: !false,
        setAsDone: undefined,
        deleteTask: undefined
      },
      {
        id: "3",
        name: "tarea C",
        timestamp: "1/1/2020",
        isDone: !false,
        isFav: !false,
        setAsDone: undefined,
        deleteTask: undefined
      }
    ],
    newTask: ""
  };

  createNewTask(e: any) {
    if (e.keyCode === 13 && this.state.newTask.trim() !== "") {
      const allTasks = [...this.state.tasks];

      allTasks.push({
        id: Math.round(Math.random() * 1000000).toString(),
        timestamp: "12/12/2012",
        name: this.state.newTask,
        isFav: false,
        isDone: false,
        setAsDone: undefined,
        deleteTask: undefined
      });

      this.setState({
        ...this.state,
        tasks: allTasks,
        newTask: ""
      });
    }
  }

  // todo: add keyboard event
  updateNewTask(e: any) {
    this.setState({
      ...this.state,
      newTask: e.target.value
    });
  }

  setAsDone(id: string): void {
    // {
    //   id: "3",
    //   name: "tarea C",
    //   timestamp: "1/1/2020",
    //   isDone: !false,
    //   isFav: !false,
    //   setAsDone: undefined
    // }

    // todo: improve efficiency
    // let clonedState = [...this.state.tasks]

    // let taskAboutToChange:ITask = clonedState.filter(task => task.id === id)[0];
    // taskAboutToChange.isDone = !taskAboutToChange.isDone;

    let taskAboutToChange: ITask = this.state.tasks.filter(task => task.id === id)[0];
    taskAboutToChange.isDone = !taskAboutToChange.isDone;

    this.setState({
      ...this.state
    });
  }

  setAsDeleted(id:string) {
    let allTasks = [...this.state.tasks]

    allTasks.splice(allTasks.findIndex(task => task.id === id), 1)

    this.setState({
      ...this.state,
      tasks: allTasks
    })
  }

  render() {
    return (
      <div className={`App bg1`}>
        <div className="inner-wrapper">
          <input
            type="text"
            value={this.state.newTask}
            className="new-task"
            onKeyDown={e => this.createNewTask(e)}
            onChange={e => this.updateNewTask(e)}
            placeholder="✏"
          />
          {this.state.tasks.filter(task => !task.isDone).length > 0 && (
            <h1>To-do ({this.state.tasks.filter(task => !task.isDone).length})</h1>
          )}
          {this.state.tasks
            .filter(task => !task.isDone)
            .map((task, idx) => (
              <TodoItem
                {...task}
                key={task.id}
                setAsDone={() => this.setAsDone(task.id)}
                deleteTask={() => this.setAsDeleted(task.id)}
              ></TodoItem>
            ))}

          {this.state.tasks.filter(task => task.isDone).length > 0 && (
            <h1>Done ({this.state.tasks.filter(task => task.isDone).length})</h1>
          )}
          {this.state.tasks
            .filter(task => task.isDone)
            .map((task, idx) => (
              <TodoItem
                {...task}
                key={task.id}
                setAsDone={() => this.setAsDone(task.id)}
                deleteTask={() => this.setAsDeleted(task.id)}
              ></TodoItem>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
