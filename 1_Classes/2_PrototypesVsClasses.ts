class Message1 { title; message; id; }

// ...is syntactic sugar for:

function Message2 (title, message, id){
    this.title = title;
    this.message = message;
    this.id = id;
}

const message2 = new Message2("Hello", "World", "Infinity");