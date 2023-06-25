const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/todo_list");

const db = mongoose.connection;

//for handling error
db.on("error", console.error.bind(console, 'Connection Error: '));

// successfully connection database running Message
db.once('open', ()=> {
    console.log('Successfully connected to the DB');
})

