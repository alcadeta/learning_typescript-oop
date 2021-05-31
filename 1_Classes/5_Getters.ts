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

    get messageStatus() : string {
      const sentMessage = this.isSent ? 'Has been sent.'
        : 'Has not been sent.';
      return `${this.message} | ${sentMessage}`;
    }

    previewMessage(): string {
      return this.message.slice(0, 10).concat('...');
    }
}

const message = new Message(
  'New Course! Just £9.99!',
  'Check out our latest course on OOP with TypeScript!',
);

message.previewMessage();
message.messageStatus;
