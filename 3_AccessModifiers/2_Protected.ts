/* eslint-disable
max-classes-per-file,no-unused-expressions, class-methods-use-this,
no-unused-vars, no-underscore-dangle, no-useless-constructor, no-empty-function */

class Animal {
  protected age:number;

  legs:number;

  name:string;

  constructor(age:number, legs:number, name:string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }
}

// child
class Cat extends Animal {
  constructor(data:{ age:number, legs:number, name:string }) {
    super(data.age, data.legs, data.name);
  }

  get birthday():number {
    // protected access
    return this.age + 1; // success
  }
}

// shape
class Dog implements Animal {
  // protected access
  age:number; // failure

  legs:number;

  name:string;
}
