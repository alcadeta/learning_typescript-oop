/* eslint-disable
max-classes-per-file,no-unused-expressions, class-methods-use-this,
no-unused-vars, no-underscore-dangle */

class User<T> {
  name:string;

  age:number;

  email:string;

  isMale:boolean;

  public classicUserData:T;

  public mergeClassicUser(params:T):void {
    const {
      name, isMale, age, email,
    } = this;

    this.classicUserData = {
      name, isMale, age, email, ...params,
    };
  }
}

interface ClassicUser {
  name: {first:string, last:string};
}

interface ClassicUser2 {
  name: {first:string, middle:string, last:string};
}

const user1 = new User<ClassicUser>();
user1.mergeClassicUser({ name: { first: 'Atlas', last: 'Kaplan' } });
user1.classicUserData.name.first;

const user2 = new User<ClassicUser2>();
user2.mergeClassicUser({ name: { first: 'Atlas', middle: 'Aberra', last: 'Kaplan' } });
user2.classicUserData.name.middle;
