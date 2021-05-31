/* eslint-disable max-classes-per-file,no-unused-expressions,class-methods-use-this */

// Base Class
class Animal {
  age: number;

  legs: number;

  name: string;

  constructor(age:number, legs:number, name:string) {
    this.age = age; this.legs = legs; this.name = name;
  }
}

// Derived Classes
class Dog extends Animal {
  woof():string { // eslint-disable-line class-methods-use-this
    return 'WOOF! WOOF! WOOF!';
  }
}
const dog = new Dog(2, 4, 'Gator');
dog.age;
dog.legs;
dog.name;
dog.woof();

class Cat extends Animal {
  meow() {
    return 'MEOW! HISS! HISS!';
  }
}
const cat = new Cat(19, 4, 'Baby');
cat.age;
cat.legs;
cat.name;
cat.meow();
