// Source: https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html

enum Genre {
  H,
  M,
  SG
}

interface User {
  name: String;
  age?: Number;
  genre: Genre;
  password: String;
  timestamp: Date;
}

function validateUser(user: User): boolean {
  return true;
}

// validateUser({"name"})

// let dani: User = {
//   name: "Dani",
//   password: "dsflkjsdfl",
//   age: 40,
//   timestamp: new Date()
// };

// let paula: User = {
//   name: "Paula",
//   password: "BCN123",
//   age: 25,
//   timestamp: new Date()
// };

// validateUser(paula);

// js

// type inference
// let edad: string = "40";
// let isLightOn: boolean = true;

// console.log(edad);

function addNumbers(n1: number, n2: number, n3?: number): number {
  let output = n1 + n2;

  if (n3 !== undefined) return output + n3;
  return output;
}

console.log(addNumbers(10, Math.PI));

function sayHello(name: string, age: number, genre: Genre): string {
  let sum = 1 + Math.PI;

  return `Hola ${name}! Your age is ${age} and you're ${genre}. My gift to you: ${sum}`;
}

// console.log(sayHello("Axel", 30, Genre.H));
/* 


let x = new CanvasServiceAPI();

x.ctx.beginPath();
x.ctx.arc(0, 0, 5, 0, 2 * Math.PI);
x.ctx.fill();
x.ctx.closePath();





















*/

/** The number of widgets present */
let foo: number;

function greet(greeting: string): void {
  console.log(greeting);
}

// greet("1");

// case 2
interface MovieSettings {
  name: string;
  duration?: number;
  director?: string;
}

function displayMovie(movie: MovieSettings): void {
  console.log(movie.name);
  movie.duration && console.log(movie.duration);
  movie.director && console.log(movie.director);
}

let movie1: MovieSettings = {
  name: "El nombre de la Rosa",
  duration: 120,
  director: "Jean Jacques Annaud"
  // error: true
};

let movie2: MovieSettings = {
  name: "Batman returns"
};

// displayMovie(movie1);
// displayMovie(movie2);

// case 3 - type alias
class Greeter {}

type GreetingLike = string | number;

function greetWithTypeAlias(g: GreetingLike): void {
  console.log(`Greetings ${g}`);
}

// greetWithTypeAlias("1");
// greetWithTypeAlias(2);

// case 4

function greeter(person: string) {
  return "Hello, " + person;
}

let user = [0, 1, 2];

// console.log(greeter(user));
// console.log(greeter(user));
console.log(greeter("user"));

// case 5 - enums
enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right"
}

function move(d: Direction) {
  console.log("I am moving to one of this valid directions :", d);
}

// move(Direction.Up);

console.log("hola chicas y chicos 2");
