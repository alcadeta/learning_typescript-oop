/* eslint-disable
max-classes-per-file,no-unused-expressions, class-methods-use-this,
no-unused-vars, no-underscore-dangle, no-useless-constructor, no-empty-function */

class Animal {
  public age:number;

  private legs:number;

  name:string;

  constructor(age:number, legs:number, name:string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }

  get ourLegs() {
    // private access
    return this.legs; // success
  }
}

class Cat extends Animal {
  constructor(data:{ age:number, legs:number, name:string }) {
    super(data.age, data.legs, data.name);
  }
}

const cat = new Cat({ age: 10, legs: 4, name: 'Baby' });
// public access
cat.age; // success

// private access
cat.legs; // error
