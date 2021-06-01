/* eslint-disable
max-classes-per-file,no-unused-expressions, class-methods-use-this,
no-unused-vars, no-underscore-dangle, no-useless-constructor, no-empty-function */

class Message {
  title:string;

  message:string;

  isSent:boolean;
}

class Messages extends Array<Message> {
  public getValidMessages():Array<Message> {
    return this.filter((value) => value.message.trim().length > 0);
  }

  static getValidMessages(messages:Array<Message>):Array<Message> {
    return messages.filter((value) => value.message.trim().length > 0);
  }
}

// instance method access
const myMessages = new Messages({ title: 'Sa', message: 'Naber?', isSent: true });
myMessages.getValidMessages();

// static method access
Messages.getValidMessages([]);
