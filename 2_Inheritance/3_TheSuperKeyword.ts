/* eslint-disable max-classes-per-file, no-unused-expressions,
class-methods-use-this,no-unused-vars */

// Base Class
class Animal {
  age: number;

  legs: number;

  name: string;

  constructor(age:number, legs:number, name:string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }
}

// Derived Class
class Cat extends Animal {
  constructor(data: {age:number, legs:number, name:string}) {
    super(data.age, data.legs, data.name);
  }

  meow() {
    return 'MEOW! HISS! HISS!';
  }
}

// Implementer Class
class Dog implements Animal {
  age: number;

  legs: number;

  name: string;

  woof():string {
    return 'WOOF! WOOF! WOOF!';
  }
}

const cat = new Cat({ age: 19, legs: 4, name: 'Baby' });
const dog = new Dog();

console.log(cat instanceof Animal); // TRUE becuase of `extends`
console.log(dog instanceof Animal); // FALSE because of `implements`
