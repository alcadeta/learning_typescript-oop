/* eslint-disable
max-classes-per-file,no-unused-expressions, class-methods-use-this,
no-unused-vars, no-underscore-dangle, no-useless-constructor, no-empty-function */

class User {
  firstName:string;

  lastName:string;

  email:string;

  get fullName():string {
    return `${this.firstName} ${this.lastName}`;
  }

  doesEmailMatch(email:string):boolean {
    return this.email === email;
  }
}

// *** MY SOLUTION *** //
class Admin extends User {
  constructor(firstName:string, lastName:string, email:string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

class Guest implements User {
  firstName:string;

  lastName:string;

  email:string;

  constructor(firstName:string, lastName:string, email:string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  get fullName():string {
    return `${this.firstName} ${this.lastName}`;
  }

  doesEmailMatch(email:string):boolean {
    return this.email === email;
  }
}

// *** TUTOR'S SOLUTION *** //
// Nearly 100% identical to mine, except the way they overrode the fullName getter:
// get fullName():string {
//   return `${this.lastName}, ${this.firstName}`;
// }
