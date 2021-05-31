/* eslint-disable max-classes-per-file,no-unused-expressions,
                  class-methods-use-this,no-unused-vars */

class Message {
    title:string;

    message:string;

    isSent:boolean;

    constructor(title:string, message:string) {
      this.title = title;
      this.message = message;
      this.isSent = false;
    }
}

const message = new Message('Hello', 'World');
