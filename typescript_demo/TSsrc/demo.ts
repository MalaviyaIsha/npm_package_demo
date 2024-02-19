//remove comments:::::::::::::::::::::::::::::::::::::::::
const printName = (name : string) => {
  console.log(name);
};
printName("sofy");

//unreachable code::::::::::::::::::::::::::::::::::::::::::::
function example(flag: boolean): string {
  if (flag) {
    return "Flag is true";
  } else {
    return "Flag is false";
  }
  // Unreachable code 
  console.log("This code is unreachable");
}

//unused labels:::::::::::::::::::::::::::::::::::::::::::::::::
function verifyAge(age: number) {
  if (age > 18) {
    verified: true;
  }
}

//noFallthroughCasesInSwitch:::::::::::::::::::::::::::::::::::::
const a: number = 6;
switch (a) {
  case 0:
    console.log("even");
  case 1:
    console.log("odd");
    break;
}

//noImplicitAny:::::::::::::::::::::::::::::::::::::::::::::::::::
function fn(s) {
  // No error?
  console.log(s.subtr(3));
}
fn(42);

//noImplicitReturns
function lookupHead(color: "blue" | "black"): string {
  if (color === "blue") {
    return "beats";
  } else {
    "bose";
  }
}

//noUnusedLocals::::::::::::::::::::::::::::::::::::::::::::::::::
function verifyAgee(age: number) {
  if (age > 18) {
    const year = 2024;
    verified: true;
  }
}

//strictNullChecks::::::::::::::::::::::::::::::::::::::::::::::::
declare const loggedInUsername: string;
const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];

const loggedInUser = users.find((u) => u.name === loggedInUsername);
console.log(loggedInUser.age);