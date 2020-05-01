import ITask from "./ITask";

export default interface ITodoItem extends ITask {
  setAsDone: any;
  deleteTask: any;
  setTaskAsFav: any;
}
