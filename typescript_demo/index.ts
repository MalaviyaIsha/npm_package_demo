var age: number = 40;
//age = 'a';
if (age < 50) {
  age += 10;
}
console.log(age);

//Any::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let num = 123_456_789;
let str = "Typescript";
let is_num = true;
let level;
console.log("check");
// function render(document:any ){
//   console.log("Hello",document);
// }

//Array:::::::::::::::::::::::::::::::::::::::::::::::::::::::
const numbers: number[] = [1, 2, 3]; // gives error if another value in
console.log(numbers);

//Tuples::::::::::::::::::::::::::::::::::::::::::::::::::::::
let user: [number, string] = [1, "sofy"];
user.push(1); // Assing third value which is not correct
console.log(user);

//Enums:::::::::::::::::::::::::::::::::::::::::::::::::::::::
const small = 1;
const medium = 2;
const large = 3;
//instead of this we use enum:::
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize = Size.Medium;
console.log(mySize);

//functios:::::::::::::::::::::::::::::::::::::::::::::::::::::
function calculate(num1: number, num2: number): number {
  return num1 + num2;
}
console.log("Sum : ", calculate(5, 5));

//Objects::::::::::::::::::::::::::::::::::::::::::::::::::::::
let employee: { readonly id: number; name?: string } = { id: 1, name: "max" };
//employee.id = 0 // gives error because of readonly
console.log(employee);

//Type Aliases::::::::::::::::::::::::::::::::::::::::::::::::
type Employee = {
  id: number;
  name: string;
};
let employee1: Employee = { id: 1, name: "maxxx" };
console.log(employee1);

//Union Type::::::::::::::::::::::::::::::::::::::::::::::::::::
function data(detail: number | string): number {
  //Narrowing for what type we want
  if (typeof detail === "number") {
    return detail * 2;
  } else {
    return parseInt(detail) * 2;
  }
}
console.log(data(2));
//console.log(data("max"));

//Intersection Types::::::::::::::::::::::::::::::::::::::::::::
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UI = Draggable & Resizable;

let textBox : UI = {
  drag: () =>{},
   resize: () =>{}
}

//Literals::::::::::::::::::::::::::::::::::::::::::::::::::::::::
type Quantity = 50 | 100;
let quantity : Quantity = 100;
console.log(quantity);