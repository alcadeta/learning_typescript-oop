// eslint-disable-next-line max-len
/* eslint-disable max-classes-per-file,no-unused-expressions,class-methods-use-this,no-unused-vars */

// Base Class
class Animal {
  age: number;

  legs: number;

  name: string;

  constructor(age:number, legs:number, name:string) {
    this.age = age; this.legs = legs; this.name = name;
  }
}

// Implements / Matches Its Shape
class Dog implements Animal {
  age: number;

  legs: number;

  name: string;

  woof():string {
    return 'WOOF! WOOF! WOOF!';
  }
}
