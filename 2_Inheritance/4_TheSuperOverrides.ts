/* eslint-disable max-classes-per-file,no-unused-expressions,
                  class-methods-use-this,no-unused-vars */

// Base Class
class Animal {
    public lives = 1;

    age: number;

 legs: number;

 name: string;

 constructor(age:number, legs:number, name:string) {
   this.age = age; this.legs = legs; this.name = name;
 }

 meow():string {
   return 'ROAR! ROAR! ROAR!';
 }
}

// Implements / Matches Its Shape
class Cat extends Animal {
    lives = 9;

    constructor(data: {age:number, legs:number, name:string}) {
      super(data.age, data.legs, data.name);
    }

    meow():string {
      super.meow();
      return 'MEOW! HISS! HISS!';
    }
}
