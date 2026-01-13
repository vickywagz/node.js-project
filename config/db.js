const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/newTodo')
    .then(() => console.log("Mongoose Connected"))
    .catch((err) => console.log("Mongoose connection error:", err));

module.exports = mongoose;
