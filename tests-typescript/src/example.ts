// Source: https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html

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
