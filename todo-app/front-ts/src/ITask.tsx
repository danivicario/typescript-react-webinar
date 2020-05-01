export default interface ITask {
  id: string,
  name: string;
  timestamp: string;
  isDone: boolean;
  isFav: boolean;
  setAsDone: any;
  deleteTask: any;
}
