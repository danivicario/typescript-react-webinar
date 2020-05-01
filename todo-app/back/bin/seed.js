const faker = require("faker");
const mongoose = require("mongoose");
const TodoItem = require("../models/TodoItem");

mongoose
  .connect("mongodb://localhost/todolist-webmad0120-1", { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    start();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

function start() {
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  
  const todoItems = Array(20)
    .fill()
    .map(_ => {
      return {
        name: faker.name.firstName(),
        done: randomInt(0, 1),
        fav: randomInt(0, 1)
      };
    });

  TodoItem.deleteMany().then(() => {
    TodoItem.create(todoItems).then(_ => {
      console.log("added succcesfully");
      process.exit(0);
    });
  });
}
