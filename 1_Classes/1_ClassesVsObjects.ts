/* eslint-disable max-classes-per-file,no-unused-expressions,
                  class-methods-use-this,no-unused-vars */

// before classes
const message1 = { title: undefined, message: undefined, id: undefined };
const message2 = { title: undefined, message: undefined };
const message3 = { title: undefined, message: undefined };

// after classes
class Message {
 title;

 message;

 id;
}
const message4 = new Message();
const message5 = new Message();
