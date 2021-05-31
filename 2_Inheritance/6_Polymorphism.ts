/* eslint-disable
max-classes-per-file,no-unused-expressions, class-methods-use-this,
no-unused-vars, no-underscore-dangle, no-useless-constructor, no-empty-function */

class User {
  firstName:string;

  age:number;

  email:string;

  constructor(firstName:string, email:string, age:number) { }
}

class BaseUser extends User {
  protected role:string;

  public hasAllAccess():boolean {
    return this.role === 'Admin';
  }
}

// Polymorphism through method/param overriding
class SuperAdmin extends BaseUser {
  role = 'Admin';

  password:string;

  constructor(firstName:string, lastName:string, age:number) {
    super(firstName, lastName, age);
  }

  // override
  hasAllAccess(user:User = undefined):boolean {
    return true;
  }

  // // overload (failure)
  // public hasAllAccess(user:User) {
  //   return user.age >= 18 && this.role;
  // }
}

// Polymorphism through class implementation
class Guest implements User {
  age:number;

  email:string;

  firstName:string;

  lastName:string;

  middleName:string;

  get fullName():string {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  constructor(firstName:string, email:string, age:number) {
    this.firstName = firstName;
    this.email = email;
    this.age = age;
  }
}
