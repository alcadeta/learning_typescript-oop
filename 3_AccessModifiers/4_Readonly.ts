/* eslint-disable
max-classes-per-file,no-unused-expressions, class-methods-use-this,
no-unused-vars, no-underscore-dangle, no-useless-constructor, no-empty-function */

class Message {
  public readonly id:string;

  title:string;

  message:string;

  isSent:boolean;

  constructor(id:string)
  {
    this.id = id;
  }
}

const msg = new Message('abc123');

// readonly access (read)
msg.id; // success

// readonly access (write)
msg.id = '123abc'; // failure
